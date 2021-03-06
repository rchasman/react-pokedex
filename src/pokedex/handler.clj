(ns pokedex.handler
  (:use [compojure.core]
        [hiccup.core]
        [hiccup.page]
        [hiccup.def])
  (:require [pokedex.api :as api]
            [compojure.handler :as handler]
            [compojure.route :as route]))

(defhtml application [& body]
  (html5
    [:head
      [:title "Reactive Pokedex"]
      [:meta {:name "description" :content "View info about Pokemon reactively."}]
      [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]
      [:meta {:charset "UTF-8"}]
      [:link {:rel "stylesheet" :href "/css/style.css"}]
      [:link {:rel "stylesheet" :href "//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css"}]]
    [:body
      [:script
        {:data-main "js/main" :src "/js/scripts/require.js"}]
      [:div#main.container]
    ]))

(defhtml not-found [& body]
  (html5
    [:h1 "Not Found"]))

(defroutes app-routes
  (GET "/" [] application)
  (GET "/all" [] api/all)
  (GET "/pokemon/" [] (str ""))
  (GET "/pokemon/:val" [val] (api/get-pokemon val))
  (route/resources "/")
  (route/not-found not-found))

(def app
  (handler/site app-routes))
