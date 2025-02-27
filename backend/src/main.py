import uvicorn

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from pkg.deliveries.http.core_router import router as core_router
from pkg.deliveries.http.get_router import router as get_router

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(core_router, prefix="/api/v1")
app.include_router(get_router, prefix="/api/v1")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
