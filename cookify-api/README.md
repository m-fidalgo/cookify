<h1 align="center">Cookify API</h1>

<h2>Running the project</h2>

1. Make sure you have installed [Python](https://www.python.org) and [Pip](https://pypi.org/project/pip/), as well as [PostgreSQL](https://www.postgresql.org)
2. Create a virtual environment with `python -m venv .venv`
3. Activate your venv with `source .venv/bin/activate`. If you're on Windows, run `.\.venv\Scripts\activate`
4. Install the required packages with `pip install -r requirements.txt`
5. Create your `.env` file
6. Run all migrations with `python manage.py migrate`
7. Run the server with `python manage.py runserver 0.0.0.0:8000`
8. That's it! The server should be running on `http://localhost:8000`
