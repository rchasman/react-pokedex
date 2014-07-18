(ns pokedex.api
  (:use [pokedex.db]
        [korma.core])
  (:require [clojure.data.json :as json]))


"API Functions"
(def all (json/write-str (select pokemon)))

(defn by-id [id]
  (first (select pokemon
    (where {:poke_id
      [= id]}))))

(defn by-name [name]
  (first (select pokemon
    (where {:poke_name
      [like (str name "%")]}))))

(defn route-by-type [x]
  (if (= (type x) (type 'a))
      (by-name x)
      (by-id x)))

(defn get-pokemon [x]
  (str (route-by-type (read-string x))))
