import React from "react";
import "./Card.css";
import CardImg1 from "../assets/card_1.jpg";
import "font-awesome/css/font-awesome.css"

const Card = () => {
	return (
		<div className="card">
			<img className="card__img" src={CardImg1} alt="" />
			<div className="card__intro center">
				<h1>Laura Smith</h1>
				<p className="card__dev-role">Frontend Developer</p>
				<p className="card__web">laurasmith.website</p>
			</div>

			<div className="card__info">
				<div className="card__btns">
					<button className="card__btn card__btn-email">
               <i className="fa-solid fa-envelope"></i>{"  "}Email
					</button>
					<button className="card__btn card__btn-linkedin"><i className="fa-brands fa-linkedin"></i>{"  "}LinkedIn</button>
				</div>

				<div className="card__content">
					<h3 className="card__h3">About</h3>
					<p className="card__p">
						I am a frontend developer with a particular interest in making
						things simple and automating daily tasks. I try to keep up with
						security and best practices, and am always looking for new things to
						learn.
					</p>

					<h3 className="card__h3">Interests</h3>
					<p className="card__p">
						Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
						Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
					</p>
				</div>
			</div>
			<footer className="card__footer">
				<div className="card__footer-div">
					<p><i className="fa-brands fa-square-twitter"></i></p>
					<p><i className="fa-brands fa-square-facebook"></i></p>
					<p><i className="fa-brands fa-square-instagram"></i></p>
					<p><i className="fa-brands fa-square-github"></i></p>
				</div>
			</footer>
		</div>
	);
};

export default Card;
