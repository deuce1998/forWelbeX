--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.4

-- Started on 2022-07-23 21:44:55

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 209 (class 1259 OID 16385)
-- Name: welbex; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.welbex (
    tw_date date,
    tw_name character varying,
    tw_count integer,
    tw_distance integer
);


ALTER TABLE public.welbex OWNER TO postgres;

--
-- TOC entry 3308 (class 0 OID 0)
-- Dependencies: 209
-- Name: TABLE welbex; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.welbex IS 'Table for Welbex';


--
-- TOC entry 3302 (class 0 OID 16385)
-- Dependencies: 209
-- Data for Name: welbex; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.welbex (tw_date, tw_name, tw_count, tw_distance) VALUES ('1998-07-26', 'Alex', 24, 233);
INSERT INTO public.welbex (tw_date, tw_name, tw_count, tw_distance) VALUES ('2025-03-26', 'Andrey', 4, 34);
INSERT INTO public.welbex (tw_date, tw_name, tw_count, tw_distance) VALUES ('2010-11-22', 'Maria', 8, 14);
INSERT INTO public.welbex (tw_date, tw_name, tw_count, tw_distance) VALUES ('2031-12-12', 'Bob', 16, 21);
INSERT INTO public.welbex (tw_date, tw_name, tw_count, tw_distance) VALUES ('2018-03-11', 'Alexandra', 20, 24);
INSERT INTO public.welbex (tw_date, tw_name, tw_count, tw_distance) VALUES ('2006-05-05', 'Stella', 13, 35);
INSERT INTO public.welbex (tw_date, tw_name, tw_count, tw_distance) VALUES ('2002-06-04', 'Losyash', 45, 64);
INSERT INTO public.welbex (tw_date, tw_name, tw_count, tw_distance) VALUES ('2022-07-01', 'Kolibri', 34, 335);
INSERT INTO public.welbex (tw_date, tw_name, tw_count, tw_distance) VALUES ('2013-03-01', 'Vasiliy', 45, 434);


-- Completed on 2022-07-23 21:44:56

--
-- PostgreSQL database dump complete
--

