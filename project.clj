(defproject pokedex "0.1.0-SNAPSHOT"
  :description "Reactive Pokedex"
  :url "http://www.roeychasman.com/pokedex"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.1.8"]
                 [korma "0.3.0"]
                 [hiccup "1.0.5"]]
  :plugins [[lein-ring "0.8.11"]]
  :ring {:handler pokedex.handler/app}
  :profiles
  {:dev
    {:dependencies [
      [javax.servlet/servlet-api "2.5"]
      [org.xerial/sqlite-jdbc "3.7.15-M1"]
      [ring-mock "0.1.5"]]}})
