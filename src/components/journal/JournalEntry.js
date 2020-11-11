import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry poiner">
            <div
                className="journal__entriy-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?quality=100&strip=info&w=320&h=240&crop=1)'
                }}
            />
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo día
                </p>
                <p className="journal__entry-content">
                    sasjdkasdhasjkd asd asd asd asd asd
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>21</h4>
            </div>
        </div>
    )
}
