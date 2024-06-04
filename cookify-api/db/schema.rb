# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_06_04_200101) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  # Custom types defined in this database.
  # Note that some types may not work with other database engines. Be careful if changing database.
  create_enum "recipe_difficulty", ["easy", "medium", "hard"]

  create_table "categories", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_categories_on_name"
  end

  create_table "ingredients", force: :cascade do |t|
    t.string "text", null: false
    t.bigint "recipe_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "keywords"
    t.index ["recipe_id"], name: "index_ingredients_on_recipe_id"
  end

  create_table "preparation_steps", force: :cascade do |t|
    t.string "text", null: false
    t.integer "position", null: false
    t.bigint "recipe_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["recipe_id"], name: "index_preparation_steps_on_recipe_id"
  end

  create_table "ratings", force: :cascade do |t|
    t.string "text", null: false
    t.integer "rating", null: false
    t.bigint "user_id", null: false
    t.bigint "recipe_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["recipe_id"], name: "index_ratings_on_recipe_id"
    t.index ["user_id"], name: "index_ratings_on_user_id"
  end

  create_table "recipe_categories", force: :cascade do |t|
    t.bigint "category_id", null: false
    t.bigint "recipe_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_recipe_categories_on_category_id"
    t.index ["recipe_id"], name: "index_recipe_categories_on_recipe_id"
  end

  create_table "recipe_images", force: :cascade do |t|
    t.string "url"
    t.bigint "recipe_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["recipe_id"], name: "index_recipe_images_on_recipe_id"
  end

  create_table "recipes", force: :cascade do |t|
    t.string "title", null: false
    t.string "servings"
    t.integer "time", null: false
    t.enum "difficulty", null: false, enum_type: "recipe_difficulty"
    t.bigint "creator_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "similar_ids", default: [], array: true
    t.index ["creator_id"], name: "index_recipes_on_creator_id"
    t.index ["title"], name: "index_recipes_on_title"
  end

  create_table "user_menus", force: :cascade do |t|
    t.bigint "breakfast_id", null: false
    t.bigint "lunch_id", null: false
    t.bigint "dinner_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["breakfast_id"], name: "index_user_menus_on_breakfast_id"
    t.index ["dinner_id"], name: "index_user_menus_on_dinner_id"
    t.index ["lunch_id"], name: "index_user_menus_on_lunch_id"
    t.index ["user_id"], name: "index_user_menus_on_user_id"
  end

  create_table "user_saved_recipes", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "recipe_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["recipe_id"], name: "index_user_saved_recipes_on_recipe_id"
    t.index ["user_id"], name: "index_user_saved_recipes_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "recommended_recipe_ids", default: [], array: true
    t.boolean "vegetarian", default: false
    t.boolean "vegan", default: false
    t.boolean "celiac", default: false
    t.boolean "lactose_intolerant", default: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "recipes", "users", column: "creator_id"
  add_foreign_key "user_menus", "recipes", column: "breakfast_id"
  add_foreign_key "user_menus", "recipes", column: "dinner_id"
  add_foreign_key "user_menus", "recipes", column: "lunch_id"
end
