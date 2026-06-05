import React from 'react';
import './Appointment.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import {AiFillHome} from "react-icons/ai";
import ContactForm from '../../components/ContactForm/ContactForm';

const Appointment = () => {

    const mapLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.3028481675633!2d67.0011149!3d24.8615387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e90400c0001%3A0x4c6b63b6b8b3b!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890'

    return (
        <section className='appointment-section pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="google-map">
                            <iframe title='map' src={mapLink}></iframe>

                            <div className="location-name">
                                <AiFillHome />
                                <p>Gulshan-e-Iqbal, Karachi, Pakistan</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="appointment-form-area">
                            <SectionTitle 
                            subTitle="BOOK APPOINTMENT"
                            title="Care at Dentalist is pleasure"
                            description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual"/>

                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;