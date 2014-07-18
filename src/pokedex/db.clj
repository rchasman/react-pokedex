(ns pokedex.db
    (:use [korma.db]
          [korma.core]))

(defdb pokedb
  (sqlite3 {:db "pokemon.db"}))

(defentity pokemon
  (pk :poke_id)
  (table :pokemon)
  (database pokedb)
  (entity-fields :poke_id :poke_name))

(defn korma-define
  "Defines a korma representation of the database."
  []
  (create-db pokedb)
  (default-connection pokedb))

(defn db-config
  "Sets up a connection to the database."
  []
  (korma-define))
