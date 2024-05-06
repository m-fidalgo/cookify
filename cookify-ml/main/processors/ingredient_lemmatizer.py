import spacy
import re
from unidecode import unidecode

MEASURE_COMPOUND_WORDS = [
    'xicara de cha', 'xicara (cha)', 'xicara de cafe', 'xicara (cafe)', 'colher de sopa', 'colher (sopa)',
    'colher de sobremesa', 'colher (sobremesa)', 'colher de cha', 'colher (cha)', 'colher de cafe',
    'colher (cafe)', 'copo americano', 'copo de requeijao'
]
MEASURE_WORDS = [
    'xicara', 'xic', 'colher', 'clr', 'cs', 'csp', 'cch', 'cc', 'csb', 'ccf', 'pitada', 'ml', 'copo',
    'l', 'litro', 'grama', 'pacote', 'caixa', 'envelope', 'lata', 'pó'
]


class IngredientLemmatizer:
    def __init__(self):
        self.nlp = spacy.load("pt_core_news_sm")


    def lemmatize_ingredient(self, ingredient):
        # remover acentuação
        formatted_ingredient = unidecode(ingredient)
        
        # remover medidas compostas
        pattern_measure_compound = '|'.join(map(re.escape, MEASURE_COMPOUND_WORDS))
        formatted_ingredient = re.sub(pattern_measure_compound, '', formatted_ingredient).strip()
        
        # remover pontuação
        formatted_ingredient = re.sub(r'[^\w\s]', '', formatted_ingredient)

        doc = self.nlp(formatted_ingredient)
        
        # remover stop words e quantidades
        lemmatized_words = [token.lemma_ for token in doc if self.__token_passes_conditions(token)]
        # deixar tudo em lowercase
        lemmatized_ingredient = ' '.join(lemmatized_words)
        return lemmatized_ingredient
    
    
    def __token_passes_conditions(self, token):
        return (not token.is_stop and not self.__is_number(token.text) and
                not self.__is_measure_word(token.lemma_))


    def __is_number(self, text):
        return re.match(r'^\d*\.?\d+\s?\w*$', text)
    
    
    def __is_measure_word(self, text):
        return text in MEASURE_WORDS