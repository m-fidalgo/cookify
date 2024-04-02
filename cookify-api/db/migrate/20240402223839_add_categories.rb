class AddCategories < ActiveRecord::Migration[7.0]
  INITIAL_CATEGORIES = [
    "Bolos e Tortas",
    "Doces e Sobremesas",
    "Tortas Salgadas",
    "Carnes",
    "Aves",
    "Peixes e Frutos do mar",
    "Saladas",
    "Acompanhamentos",
    "Sopas",
    "Massas",
    "Bebidas",
    "Lanches",
    "Sem glúten",
    "Sem lactose",
    "Vegano",
    "Vegetariano",
    "Saudável",
    "Lanches",
  ].freeze

  def change
    categories = INITIAL_CATEGORIES.map do |category|
      {
        name: category,
        created_at: Time.current,
        updated_at: Time.current,
      }
    end

    Category.upsert_all(categories) # rubocop:disable Rails/SkipsModelValidations
  end
end
