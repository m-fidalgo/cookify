import spacy
import re
from unidecode import unidecode

MEASURE_COMPOUND_WORDS = [
    'xicara cha', 'xicara cafe', 'colher sopa', 'colher sobremesa', 'colher cha', 
    'colher cafe', 'copo americano', 'copo requeijao'
]
MEASURE_WORDS = [
    'xicara', 'xic', 'colher', 'clr', 'cs', 'csp', 'cch', 'cc', 'csb', 'ccf', 'pitada', 'ml', 'copo',
    'l', 'litro', 'grama', 'g', 'kg', 'kilo', 'quilo', 'pacote', 'caixa', 'envelope', 'lata', 'po'
]


class IngredientLemmatizer:
    def __init__(self):
        self.nlp = spacy.load("pt_core_news_sm")


    def lemmatize_ingredient(self, ingredient):
        doc = self.nlp(ingredient)
        
        # remover stop words e verbos
        lemmatized_words = [token.lemma_ for token in doc if not token.is_stop and token.pos_ != 'VERB']
        formatted_ingredient = ' '.join(lemmatized_words)
        
        # remover pontuação
        formatted_ingredient = re.sub(r'[^\w\s]', '', formatted_ingredient)
        
        # remover acentuação
        formatted_ingredient = unidecode(formatted_ingredient)
        
        # manter apenas um espaço entre cada palavra
        formatted_ingredient = ' '.join(formatted_ingredient.split()).strip()
        
        # remover medidas compostas
        pattern_measure_compound = '|'.join(map(re.escape, MEASURE_COMPOUND_WORDS))
        formatted_ingredient = re.sub(pattern_measure_compound, '', formatted_ingredient).strip()
        
        # remover measure words e números
        non_measure_words = [i for i in formatted_ingredient.split()
                                if not self.__is_measure_word(i) and not re.match(r'^\d*\.?\d+\s?\w*$', i)]
        formatted_ingredient = ' '.join(non_measure_words)
        
        # deixar tudo em lowercase e remover espaços ao redor
        formatted_ingredient = formatted_ingredient.lower().strip()
        return formatted_ingredient
    
    
    def __token_passes_conditions(self, token):
        return (not token.is_stop and token.pos_ != 'VERB' and
                not re.match(r'^\d*\.?\d+\s?\w*$', token.text))
    
    
    def __is_measure_word(self, text):
        return text in MEASURE_WORDS