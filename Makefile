start: pokemon.db
	lein ring server

pokemon.db:
	python populate.py

.PHONY: clean
clean:
	rm -f pokemon.db
