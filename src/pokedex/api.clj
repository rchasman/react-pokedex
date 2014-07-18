(ns pokedex.api
  (:use [pokedex.db]
        [korma.core])
  (:require [clojure.data.json :as json]))


"API Functions"
(def all (json/write-str (select pokemon)))

(defn get-pokemon [x]
  (if (= (type (read-string x)) (type 'a))
      (str (by-name x))
      (str (by-id x))))

(defn by-id [id]
  (first (select pokemon
    (where {:poke_id
      [= (read-string id)]}))))

(defn by-name [name]
  (first (select pokemon
    (where {:poke_name
      [like (str name "%")]}))))
