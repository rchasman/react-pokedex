(ns pokedex.api
  (:use [pokedex.db]
        [korma.core])
  (:require [clojure.data.json :as json]))


"API Functions"
(def all (json/write-str (select pokemon)))
