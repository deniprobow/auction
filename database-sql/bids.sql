-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Waktu pembuatan: 14 Mar 2023 pada 10.16
-- Versi server: 5.7.39
-- Versi PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bids`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `bid_item`
--

CREATE TABLE `bid_item` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `bid_price` decimal(10,2) NOT NULL,
  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `bid_item`
--

INSERT INTO `bid_item` (`id`, `user_id`, `item_id`, `created_at`, `bid_price`, `updated_at`) VALUES
(1, 1, 2, '2023-03-11 02:21:44.096915', '700.00', '2023-03-11 02:21:44.096915'),
(2, 1, 3, '2023-03-11 02:25:00.251621', '710.00', '2023-03-11 02:25:00.251621'),
(3, 1, 3, '2023-03-11 02:27:44.274296', '740.00', '2023-03-11 02:28:13.994907'),
(4, 1, 1, '2023-03-11 02:36:06.086023', '750.00', '2023-03-11 02:36:06.086023'),
(5, 1, 1, '2023-03-13 02:02:34.124473', '750.00', '2023-03-13 02:02:34.124473'),
(6, 1, 1, '2023-03-13 02:56:56.325027', '805.00', '2023-03-13 02:56:56.325027'),
(7, 1, 1, '2023-03-13 02:57:32.682510', '805.00', '2023-03-13 02:57:32.682510'),
(8, 1, 1, '2023-03-13 02:58:23.156090', '860.00', '2023-03-13 02:58:23.156090'),
(9, 1, 1, '2023-03-13 03:02:49.742289', '820.00', '2023-03-13 03:02:49.742289'),
(10, 1, 3, '2023-03-13 03:20:26.108319', '705.00', '2023-03-13 03:20:26.108319'),
(11, 1, 4, '2023-03-13 03:21:56.600282', '706.00', '2023-03-13 03:21:56.600282'),
(12, 1, 4, '2023-03-13 03:23:13.401347', '707.00', '2023-03-13 03:23:13.401347'),
(13, 1, 4, '2023-03-13 03:23:49.848743', '708.00', '2023-03-13 03:23:49.848743'),
(14, 1, 2, '2023-03-13 03:35:31.278472', '902.00', '2023-03-13 03:35:31.278472'),
(15, 1, 1, '2023-03-13 03:38:34.213631', '802.00', '2023-03-13 03:38:34.213631'),
(16, 1, 1, '2023-03-13 03:41:32.852259', '805.00', '2023-03-13 03:41:32.852259'),
(17, 1, 1, '2023-03-13 03:43:55.902940', '806.00', '2023-03-13 03:43:55.902940'),
(18, 1, 1, '2023-03-13 03:44:41.243192', '807.00', '2023-03-13 03:44:41.243192'),
(19, 1, 1, '2023-03-13 03:45:14.220814', '808.00', '2023-03-13 03:45:14.220814'),
(20, 1, 1, '2023-03-13 03:45:57.337248', '809.00', '2023-03-13 03:45:57.337248'),
(21, 1, 1, '2023-03-13 03:50:13.187255', '809.00', '2023-03-13 03:50:13.187255'),
(22, 1, 2, '2023-03-13 03:53:00.641593', '903.00', '2023-03-13 03:53:00.641593'),
(23, 1, 1, '2023-03-13 11:12:52.193458', '810.00', '2023-03-13 11:12:52.193458'),
(24, 1, 2, '2023-03-13 11:12:59.894776', '904.00', '2023-03-13 11:12:59.894776'),
(25, 1, 3, '2023-03-13 11:13:07.278624', '706.00', '2023-03-13 11:13:07.278624'),
(26, 1, 1, '2023-03-13 11:37:08.324477', '811.00', '2023-03-13 11:37:08.324477'),
(27, 1, 2, '2023-03-13 11:37:14.770667', '905.00', '2023-03-13 11:37:14.770667'),
(28, 1, 2, '2023-03-13 11:37:23.449688', '906.00', '2023-03-13 11:37:23.449688'),
(29, 1, 4, '2023-03-13 11:50:33.294971', '709.00', '2023-03-13 11:50:33.294971'),
(30, 1, 2, '2023-03-13 11:58:07.585266', '907.00', '2023-03-13 11:58:07.585266'),
(31, 1, 1, '2023-03-14 08:02:35.596940', '812.00', '2023-03-14 08:02:35.596940'),
(32, 5, 1, '2023-03-14 09:14:26.319983', '813.00', '2023-03-14 09:14:26.319983'),
(33, 5, 2, '2023-03-14 09:14:32.188795', '908.00', '2023-03-14 09:14:32.188795'),
(34, 5, 10, '2023-03-14 09:14:40.740190', '871.00', '2023-03-14 09:14:40.740190');

-- --------------------------------------------------------

--
-- Struktur dari tabel `item`
--

CREATE TABLE `item` (
  `id` int(11) NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `current_price` decimal(10,2) NOT NULL DEFAULT '0.00',
  `duration` int(11) NOT NULL DEFAULT '0',
  `user_id` int(2) NOT NULL DEFAULT '0',
  `default_price` decimal(10,2) NOT NULL DEFAULT '0.00',
  `is_bidding` int(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `item`
--

INSERT INTO `item` (`id`, `item_name`, `current_price`, `duration`, `user_id`, `default_price`, `is_bidding`) VALUES
(1, 'Samsung Flip 4', '813.00', 3600, 5, '800.00', 1),
(2, 'Iphone 13 Pro Max', '908.00', 3600, 5, '900.00', 1),
(3, 'Asus Rog Phone 4', '706.00', 3600, 1, '700.00', 0),
(4, 'Oppo Find X5', '709.00', 3600, 1, '700.00', 0),
(7, 'Iphone 13 Pro', '800.00', 7200, 0, '800.00', 0),
(8, 'Samsung Galaxy S23', '800.00', 7200, 0, '800.00', 1),
(9, 'Samsung Z Flip 4', '700.00', 7200, 0, '700.00', 1),
(10, 'Samsung Z Fold 4', '871.00', 7200, 5, '870.00', 1),
(11, 'Asus Rog Phone 3', '700.00', 7200, 0, '700.00', 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `balance` decimal(10,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `username`, `name`, `password`, `balance`) VALUES
(1, 'joe@email.com', 'Joe', '$2a$12$vGRCMxjaQzQ7EGc74QqEde9KTXtjPTbShhEvzU0UmY9VzxjluvmXy', '1530.00'),
(2, 'tom@email.com', 'Tom', '$2a$12$vGRCMxjaQzQ7EGc74QqEde9KTXtjPTbShhEvzU0UmY9VzxjluvmXy', '0.00'),
(4, 'eren@email.com', 'eren@email.com', '$2b$12$grSLhDiGG2Mbh9mDn/.yGeamZceZK7s9vRIOcU2B2a/FWUQLdSM3q', '0.00'),
(5, 'himura@email.com', 'himura@email.com', '$2b$12$WayfoBDIykB7FP9yhFohCOmmzkbxXeG8DMvNlxw0HaZ30pp9Kk7cu', '1100.00');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `bid_item`
--
ALTER TABLE `bid_item`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `bid_item`
--
ALTER TABLE `bid_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT untuk tabel `item`
--
ALTER TABLE `item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
