---
title: "Database Indexing Strategies for Low-Latency ML Pipelines"
description: "Optimizing PostgreSQL, Redis, and Vector index architectures (B-Tree, HASH, GIN, HNSW, IVFFlat) for high-throughput data pipelines."
date: 2026-08-16
tags:
  - MLSystems
  - DataScience
  - Database
  - Performance
---

> [!abstract] Overview
> Data systems feeding machine learning models require specialized indexing strategies to balance write amplification against sub-millisecond retrieval latencies.

## Indexing Fundamentals for ML Workloads

When streaming 10k+ events/sec into persistent stores for feature extraction:

1. **B-Tree**: Primary index for range filtering and timestamp partitioning.
2. **HASH Index**: O(1) equality lookups for entity keys (`user_id`, `device_id`).
3. **GIN / TSVector**: Full-text and inverted index searches.
4. **HNSW (Hierarchical Navigable Small World)**: Vector similarity search for embedding nearest neighbors.

```sql
-- Partitioned table with composite indexing for feature extraction
CREATE INDEX idx_features_user_timestamp
ON transaction_features (user_id, event_timestamp DESC);

-- Vector embedding indexing using pgvector
CREATE INDEX idx_embeddings_hnsw
ON code_embeddings USING hnsw (embedding vector_cosine_ops)
WITH (m = 16, ef_construction = 64);
```

### Key Findings & Benchmarks

| Index Type           | Lookup Latency | Write Overhead | Memory Footprint |
| :------------------- | :------------- | :------------- | :--------------- |
| **Sequential Scan**  | 380ms          | None           | Low              |
| **B-Tree Composite** | 1.8ms          | Moderate       | Medium           |
| **HNSW (1536-dim)**  | 4.2ms          | High at build  | High             |

---

_Related notes: [[blog/dualsentry_financial_anomaly_detection|DualSentry: Real-Time Financial Anomaly Detection with Kafka & ML]]_
