import React from 'react';
import { useTranslation } from 'react-i18next';

const Premium = () => {
    const {t}=useTranslation()
    return (
        <div className="right__container">
            <h4 className="right__container__h4">{t("premium.part1")}</h4>
            <p className="right__premium__p">
            {t("premium.part2")}            </p>
            <button className="right__premium__btn">{t("premium.part3")}</button>
        </div>
    );
}

export default Premium;
