import multiprocessing
import time
import subprocess


def start_worker(worker):
    cmd = ['python', worker]
    return subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)


def start_all():
    workers = [
        "main/workers/all_recipe_similarities_worker.py",
        "main/workers/ingredient_changed_worker.py",
        "main/workers/recipe_similarities_worker.py",
        "main/workers/user_recommendations_worker.py",
        "main/workers/menu_recommendation_worker.py",
    ]

    processes = []
    for worker in workers:
        print(f"Starting {worker}...")
        process = start_worker(worker)
        processes.append(process)
        
    for process in processes:
        process.wait()

if __name__ == "__main__":
    start_all()
