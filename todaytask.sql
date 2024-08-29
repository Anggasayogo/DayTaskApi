-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 29 Agu 2024 pada 13.24
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todaytask`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `divisi`
--

CREATE TABLE `divisi` (
  `id_divisi` int(11) NOT NULL,
  `divisi_name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `divisi`
--

INSERT INTO `divisi` (`id_divisi`, `divisi_name`, `created_at`, `updated_at`) VALUES
(1, 'Oprational Solution', '2024-03-12 07:29:01', '2024-03-12 07:29:01'),
(2, 'Cadas', '2024-03-12 07:29:01', '2024-03-12 07:29:01');

-- --------------------------------------------------------

--
-- Struktur dari tabel `point`
--

CREATE TABLE `point` (
  `id_point` int(11) NOT NULL,
  `point` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `point`
--

INSERT INTO `point` (`id_point`, `point`, `created_at`, `updated_at`) VALUES
(1, 10, '2024-03-12 07:34:32', '2024-03-12 07:34:32'),
(2, 20, '2024-03-12 07:34:32', '2024-03-12 07:34:32');

-- --------------------------------------------------------

--
-- Struktur dari tabel `priority`
--

CREATE TABLE `priority` (
  `id_priority` int(11) NOT NULL,
  `prtiority_name` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `priority`
--

INSERT INTO `priority` (`id_priority`, `prtiority_name`, `created_at`, `updated_at`) VALUES
(1, 'HIGH', '2024-08-29 10:47:30', '0000-00-00 00:00:00'),
(2, 'LOW', '2024-08-29 10:47:30', '0000-00-00 00:00:00'),
(3, 'MEDIUM', '2024-08-29 10:47:49', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `price` double NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `products`
--

INSERT INTO `products` (`id`, `title`, `price`, `createdAt`, `updatedAt`) VALUES
(1, 'Juice', 10000, '2024-02-01 15:33:12', '2024-02-02 15:33:26'),
(2, 'Coffe', 20000, '2024-02-01 15:33:18', '2024-02-03 15:33:32');

-- --------------------------------------------------------

--
-- Struktur dari tabel `reward`
--

CREATE TABLE `reward` (
  `id_reward` int(11) NOT NULL,
  `reward_name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `reward`
--

INSERT INTO `reward` (`id_reward`, `reward_name`, `created_at`, `updated_at`) VALUES
(1, 'voucher belanja tokopedia', '2024-03-12 07:33:29', '2024-03-12 07:33:29');

-- --------------------------------------------------------

--
-- Struktur dari tabel `roles`
--

CREATE TABLE `roles` (
  `id_role` int(11) NOT NULL,
  `role_name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `roles`
--

INSERT INTO `roles` (`id_role`, `role_name`, `created_at`, `updated_at`) VALUES
(1, 'depthead', '2024-03-12 07:27:21', '2024-03-12 07:27:21'),
(2, 'employe', '2024-03-12 07:27:21', '2024-03-12 07:27:21');

-- --------------------------------------------------------

--
-- Struktur dari tabel `task`
--

CREATE TABLE `task` (
  `id` int(11) NOT NULL,
  `id_point` int(11) NOT NULL,
  `task_name` text NOT NULL,
  `task_progres` varchar(100) NOT NULL,
  `task_date` datetime NOT NULL,
  `task_duedate` datetime NOT NULL,
  `task_docs` text NOT NULL,
  `id_pic` int(11) NOT NULL,
  `id_svp` int(11) NOT NULL,
  `priority_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `task`
--

INSERT INTO `task` (`id`, `id_point`, `task_name`, `task_progres`, `task_date`, `task_duedate`, `task_docs`, `id_pic`, `id_svp`, `priority_id`, `createdAt`, `updatedAt`) VALUES
(8, 2, 'Buat Web MF yang keren', 'success', '2024-07-09 01:30:00', '2024-10-09 10:30:00', 'docs.pdf', 1, 7, 2, '2024-06-25 10:16:01', '2024-06-25 10:16:01'),
(9, 1, 'Buat Web MF yang keren', 'asign', '2024-07-09 01:30:00', '2024-10-09 10:30:00', 'docs.pdf', 6, 7, 1, '2024-06-25 10:19:27', '2024-06-25 10:19:27'),
(10, 2, 'Buat Web MF yang keren', 'asign', '2024-07-09 01:30:00', '2024-10-09 10:30:00', 'docs.pdf', 6, 7, 3, '2024-06-25 10:20:58', '2024-06-25 10:20:58'),
(11, 2, 'Buat Web MF yang keren 2', 'asign', '2024-07-09 01:30:00', '2024-10-09 10:30:00', 'docs.pdf', 6, 7, 1, '2024-06-25 10:21:05', '2024-06-25 10:21:05'),
(12, 2, 'Buat Web MF yang keren 2', 'success', '2024-07-09 01:30:00', '2024-10-09 10:30:00', 'docs.pdf', 9, 7, 2, '2024-06-25 10:21:16', '2024-06-25 10:21:16'),
(13, 1, 'Buat Web MF yang keren 2', 'success', '2024-07-09 01:30:00', '2024-10-09 10:30:00', 'docs.pdf', 1, 7, 1, '2024-06-25 10:21:21', '2024-06-25 10:21:21'),
(14, 2, 'Buat Web MF yang keren 2', 'asign', '2024-07-09 01:30:00', '2024-10-09 10:30:00', 'docs.pdf', 5, 7, 1, '2024-08-29 11:14:20', '2024-08-29 11:14:20');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role_id` int(11) NOT NULL,
  `divisi_id` int(11) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `avatar` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `role_id`, `divisi_id`, `phone`, `avatar`, `createdAt`, `updatedAt`) VALUES
(1, 'Angga Maulana', 'angga@gmail.com', '$2b$10$HXIQeu5znV9slOUPytr3F.BumXkx1GMEatRTpU0Lj5sADqLzBCFTy', 2, 1, '089525551789', '-', '2024-02-26 09:13:30', '2024-02-26 09:13:30'),
(6, 'Lishera Irena', 'iren@gmail.com', '$2b$10$pQZFKoyS/PXX9VjciACxbe/arsvWBzin35bMrFzf.bml7vcmHpi5W', 2, 1, '0895255516171', '-', '2024-03-12 07:51:50', '2024-03-12 07:51:50'),
(7, 'Azky Muhtarom', 'azky@gmail.com', '$2b$10$OlDVASgzfBUazc0h7eDujOZIaDKo8X5z/EUe13ElihdtqfAlx/ze6', 1, 1, '0895255516171', '-', '2024-03-12 07:52:40', '2024-03-12 07:52:40'),
(9, 'Ari Darmawan', 'ari@gmail.com', '$2b$10$QSUO9A46b9eTdc6hlZ2l6ubAtknXs3OnqTywdLyyf5xC86RuqED3u', 2, 1, '0895255516171', '-', '2024-06-24 04:53:29', '2024-06-24 04:53:29');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `divisi`
--
ALTER TABLE `divisi`
  ADD PRIMARY KEY (`id_divisi`);

--
-- Indeks untuk tabel `point`
--
ALTER TABLE `point`
  ADD PRIMARY KEY (`id_point`);

--
-- Indeks untuk tabel `priority`
--
ALTER TABLE `priority`
  ADD PRIMARY KEY (`id_priority`);

--
-- Indeks untuk tabel `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `reward`
--
ALTER TABLE `reward`
  ADD PRIMARY KEY (`id_reward`);

--
-- Indeks untuk tabel `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id_role`);

--
-- Indeks untuk tabel `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `divisi`
--
ALTER TABLE `divisi`
  MODIFY `id_divisi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `point`
--
ALTER TABLE `point`
  MODIFY `id_point` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `priority`
--
ALTER TABLE `priority`
  MODIFY `id_priority` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `reward`
--
ALTER TABLE `reward`
  MODIFY `id_reward` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `roles`
--
ALTER TABLE `roles`
  MODIFY `id_role` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `task`
--
ALTER TABLE `task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
