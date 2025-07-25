export const amProjectsDictionary = [
  // פרטי עובד
  { label: "מספר זהות", synonyms: ["זהות:"], matchType: "includes" },
  { label: "מספר העובד", synonyms: ["העובד:"], matchType: "includes" },
  { label: "תושב", synonyms: ["תושב:"], matchType: "includes" },
  { label: "סוג משרה", synonyms: ["ס.משרה:", "משרה"], matchType: "includes" },
  { label: "דרוג", synonyms: ["דרוג:"], matchType: "includes" },
  { label: "דרגה", synonyms: ["דרגה:"], matchType: "includes" },
  { label: "בסיס", synonyms: ["בסיס"], matchType: "includes" },
  { label: "חלקיות", synonyms: ["חלקיות"], matchType: "includes" },
  { label: "תחילת עבודה", synonyms: ["תחילת"], matchType: "includes" },
  { label: "מחלקה", synonyms: ["מחלקה:"], matchType: "includes" },
  { label: "מצב משפחתי", synonyms: ["משפחתי:"], matchType: "includes" },
  { label: "בנק", synonyms: ["בנק:"], matchType: "includes" },
  { label: "חשבון בנק", synonyms: ["חשבון:"], matchType: "includes" },
  { label: "שם העובד", synonyms: ["עובדים"], matchType: "includes" },

  // פרטי מעסיק
  { label: "חברה", synonyms: ["חברה"], matchType: "includes" },
  { label: "כתובת חברה", synonyms: ["כתובת"], matchType: "includes" },
  { label: "יישוב חברה", synonyms: ["ישוב"], matchType: "includes" },
  { label: "תיק ניכויים", synonyms: ["תיק"], matchType: "includes" },
  { label: "מספר תאגיד", synonyms: ["תאגיד:"], matchType: "includes" },
  { label: "תיק ביטוח לאומי", synonyms: ["בי\"ל", "בי''ל:"], matchType: "includes" },
  { label: "אופן תשלום", synonyms: ["אופן"], matchType: "includes" },

  // רכיבי שכר
  { label: "משכורת", synonyms: ["משכורת"], matchType: "includes" },
  { label: "שעות נוספות", synonyms: ["ש.נוס"], matchType: "includes" },
  { label: "שעות נוספות 125%", synonyms: ["125%"], matchType: "includes" },
  { label: "שעות נוספות 150%", synonyms: ["150%"], matchType: "includes" },
  { label: "עבודה ביום שישי", synonyms: ["שישי"], matchType: "includes" },
  { label: "נסיעות", synonyms: ["נסיעות"], matchType: "includes" },
  { label: "מחיר לשעה", synonyms: ["מחיר"], matchType: "includes" },

  // סיכומי שכר
  { label: "שכר ברוטו", synonyms: ["סה\"כ", "תשלומים"], matchType: "includes" },
  { label: "שכר נטו", synonyms: ["שכר נטו"], matchType: "includes" },
  { label: "לתשלום", synonyms: ["לתשלום"], matchType: "includes" },

  // ניכויי חובה
  { label: "ביטוח לאומי", synonyms: ["ב.לאומי"], matchType: "includes" },
  { label: "מס בריאות", synonyms: ["בריאות"], matchType: "includes" },
  { label: "פנסיה", synonyms: ["הפניקס"], matchType: "includes" },
  { label: "ניכויי חובה", synonyms: ["חובה"], matchType: "includes" },

  // ניכויי רשות
  { label: "ניכויי רשות", synonyms: ["רשות"], matchType: "includes" },

  // נתונים נוספים
  { label: "ימי עבודה", synonyms: ["ימי"], matchType: "includes" },
  { label: "שעות עבודה", synonyms: ["שעות"], matchType: "includes" },
  { label: "שעות ליום", synonyms: ["ליום"], matchType: "includes" },
  { label: "שעות העדרות", synonyms: ["העדרות"], matchType: "includes" },
  { label: "נקודות זיכוי", synonyms: ["נק."], matchType: "includes" },
  { label: "מס שולי", synonyms: ["שולי"], matchType: "includes" },
  { label: "קוד מהדורה", synonyms: ["מהדורה"], matchType: "includes" },
  { label: "חישוב מצטבר", synonyms: ["חישוב"], matchType: "includes" },

  // בסיסי חישוב
  { label: "שכר חייב במס", synonyms: ["שכר למס"], matchType: "includes" },
  { label: "שכר לביטוח לאומי", synonyms: ["שכר ב.ל"], matchType: "includes" },
  { label: "שכר מבוטח", synonyms: ["מבוטח"], matchType: "includes" },
  { label: "בסיס קרן השתלמות", synonyms: ["קרה\"ש", "קרהש"], matchType: "includes" },
  { label: "גמל מעסיק", synonyms: ["גמל"], matchType: "includes" },
  { label: "לפיצויים לא חייב במס", synonyms: ["לפיצ."], matchType: "includes" },
  { label: "ביטוח לאומי מעסיק", synonyms: ["ב.ל מעסיק"], matchType: "includes" },
  { label: "שכר מינימום חודשי", synonyms: ["מינ.חודש"], matchType: "includes" },
  { label: "שכר מינימום לשעה", synonyms: ["מינ.שעה"], matchType: "includes" },

  // חופשה
  { label: "יתרה קודמת", synonyms: ["קודמת"], matchType: "includes" },
  { label: "צבירה חודשית", synonyms: ["צבירה"], matchType: "includes" },
  { label: "ניצול", synonyms: ["ניצול"], matchType: "includes" },
  { label: "יתרה חדשה", synonyms: ["חדשה"], matchType: "includes" },
  { label: "שם החברה", synonyms: ["שם החברה"], matchType: "exact" },
  { label: "כתובת", synonyms: ["כתובת"], matchType: "exact" },
  { label: "תיק ניכויים", synonyms: ["תיק ניכויים"], matchType: "exact" },
  { label: "מספר עובד", synonyms: ["מס' עובד"], matchType: "exact" },
  { label: "שם עובד", synonyms: ["שם עובד"], matchType: "exact" },
  { label: "תעודת זהות", synonyms: ["תעודת זהות"], matchType: "exact" },
  { label: "מחלקה", synonyms: ["מחלקה"], matchType: "exact" },
  { label: "תת מחלקה", synonyms: ["תת מחלקה"], matchType: "exact" },
  { label: "דרוג", synonyms: ["דרוג"], matchType: "exact" },
  { label: "דרגה", synonyms: ["דרגה"], matchType: "exact" },
  { label: "וותק", synonyms: ["וותק"], matchType: "exact" },
  { label: "תחילת עבודה", synonyms: ["תחילת עבודה"], matchType: "exact" },
  { label: "תעריף", synonyms: ["תעריף"], matchType: "exact" },
  { label: "תעריף יום", synonyms: ["תעריף יום"], matchType: "exact" },
  { label: "תעריף שעה", synonyms: ["תעריף שעה"], matchType: "exact" },
  { label: "ימי עבודה", synonyms: ["ימי עבודה"], matchType: "exact" },
  { label: "שעות עבודה", synonyms: ["שעות עבודה"], matchType: "exact" },
  { label: "בנק", synonyms: ["בנק"], matchType: "exact" },
  { label: "סניף", synonyms: ["סניף"], matchType: "exact" },
  { label: "חשבון", synonyms: ["חשבון"], matchType: "exact" },
  { label: "שכר מינימום לחודש", synonyms: ["שכר מינימום לחודש"], matchType: "exact" },
  { label: "שכר מינימום לשעה", synonyms: ["שכר מינימום לשעה"], matchType: "exact" },
  { label: "ימי תקן", synonyms: ["ימי תקן"], matchType: "exact" },
  { label: "שעות תקן", synonyms: ["שעות תקן"], matchType: "exact" },
  { label: "קופ\"ג מעביד", synonyms: ["קופ\"ג מעביד", "קופ\"ג מעביד-חודשי"], matchType: "exact" },
  { label: "קה\"ל מעביד", synonyms: ["קה\"ל מעביד", "קה\"ל מעביד-חודשי"], matchType: "exact" },
  { label: "שכר לקופ\"ג", synonyms: ["שכר לקופ\"ג"], matchType: "exact" },
  { label: "שכר לקה\"ל", synonyms: ["שכר לקה\"ל"], matchType: "exact" },
  { label: "שכר יסוד", synonyms: ["שכר יסוד"], matchType: "exact" },
  { label: "נסיעות", synonyms: ["נסיעות"], matchType: "exact" },
  { label: "תמורת חופשה", synonyms: ["תמורת חופשה"], matchType: "exact" },
  { label: "הבראה חודשי", synonyms: ["הבראה חודשי"], matchType: "exact" },
  { label: "תמורה עבור ימי חג", synonyms: ["תמורה עבור ימי חג"], matchType: "exact" },
  { label: "מחלה", synonyms: ["מחלה"], matchType: "exact" },
  { label: "מצב משפחתי", synonyms: ["מצב משפחתי"], matchType: "exact" },
  { label: "בן זוג עובד", synonyms: ["בן זוג עובד"], matchType: "exact" },
  { label: "נ. זיכוי", synonyms: ["נ. זיכוי"], matchType: "exact" },
  { label: "אחוז משרה", synonyms: ["אחוז משרה"], matchType: "exact" },
  { label: "מס שולי", synonyms: ["מס שולי"], matchType: "exact" },
  { label: "% מס קבוע", synonyms: ["% מס קבוע"], matchType: "exact" },
  { label: "זיכוי אישי", synonyms: ["זיכוי אישי"], matchType: "exact" },
  { label: "זיכוי נוסף", synonyms: ["זיכוי נוסף"], matchType: "exact" },
  { label: "זיכוי גמל", synonyms: ["זיכוי גמל"], matchType: "exact" },
  { label: "זיכוי משמרות", synonyms: ["זיכוי משמרות"], matchType: "exact" },
  { label: "פטור חודשי", synonyms: ["פטור חודשי"], matchType: "exact" },
  { label: "פטור ס 47'", synonyms: ["פטור ס 47'"], matchType: "exact" },
  { label: "הנחת ישובי פיתוח", synonyms: ["הנחת ישובי פיתוח"], matchType: "exact" },
  { label: "תאום מס", synonyms: ["תאום מס"], matchType: "exact" },
  { label: "שכר לתאום", synonyms: ["שכר לתאום"], matchType: "exact" },
  { label: "מ.ה. לתאום", synonyms: ["מ.ה. לתאום"], matchType: "exact" },
  { label: "חייב מ.ה.", synonyms: ["חייב מ.ה."], matchType: "exact" },
  { label: "חייב ב.ל.", synonyms: ["חייב ב.ל."], matchType: "exact" },
  { label: "סה\"כ תשלומים", synonyms: ["סה\"כ תשלומים"], matchType: "exact" },
  { label: "סה\"כ ניכויים", synonyms: ["סה\"כ ניכויים"], matchType: "exact" },
  { label: "שכר נטו", synonyms: ["שכר נטו"], matchType: "exact" },
  { label: "נטו לתשלום", synonyms: ["נטו לתשלום"], matchType: "exact" },
  { label: "ביטוח לאומי", synonyms: ["ביטוח לאומי"], matchType: "exact" },
  { label: "דמי בריאות", synonyms: ["דמי בריאות"], matchType: "exact" },
  { label: "קרן השתלמות", synonyms: ["קרן השתלמות"], matchType: "exact" },
  { label: "פנסיה צו הרחבה ניקיון", synonyms: ["פנסיה צו הרחבה ניקיון"], matchType: "exact" },
  { label: "מס הכנסה", synonyms: ["מס הכנסה"], matchType: "exact" },
  { label: "גמל 35%", synonyms: ["גמל 35%"], matchType: "exact" },
  { label: "דמי חבר", synonyms: ["דמי חבר", "דמי טיפול"], matchType: "exact" },
  { label: "חודשי עבודה", synonyms: ["חודשי עבודה"], matchType: "exact" },
  { label: "תשלומים", synonyms: ["תשלומים"], matchType: "exact" },
  { label: "שכר שווה כסף", synonyms: ["שכר שווה כסף"], matchType: "exact" },
  { label: "בתאריך", synonyms: ["בתאריך"], matchType: "exact" },
  // פרטי עובד
  { label: "שם עובד", synonyms: ["שם עובד"], matchType: "exact" },
  { label: "מספר עובד", synonyms: ["מספר עובד"], matchType: "exact" },
  { label: "תעודת זהות", synonyms: ["ת.ז", "ת\"ז", "תעודת זהות"], matchType: "exact" },
  { label: "כתובת", synonyms: ["כתובת"], matchType: "exact" },
  { label: "טלפון", synonyms: ["טלפון"], matchType: "exact" },

  // פרטי העסקה
  { label: "תאריך תחילת עבודה", synonyms: ["תאריך תחילת עבודה"], matchType: "exact" },
  { label: "דרגת אופק", synonyms: ["דרגת אופק"], matchType: "exact" },
  { label: "שלב בדרגה", synonyms: ["שלב בדרגה"], matchType: "exact" },
  { label: "אחוז משרה", synonyms: ["אחוז משרה"], matchType: "exact" },
  { label: "שכר משוקלל למשרה מלאה", synonyms: ["שכר משוקלל למשרה מלאה"], matchType: "exact" },
  { label: "שכר מינימום לשעה", synonyms: ["שכר מינימום לשעה"], matchType: "exact" },

  // רכיבי שכר / תשלומים
  { label: "משולב אופק חדש", synonyms: ["משולב אופק חדש"], matchType: "exact" },
  { label: "שקלול יתרות", synonyms: ["שקלול יתרות"], matchType: "exact" },
  { label: "תוספת אופק חדש", synonyms: ["תוספת אופק חדש"], matchType: "exact" },
  { label: "החזר נסיעות", synonyms: ["החזר נסיעות"], matchType: "exact" },
  { label: "גמול חינוך מיוחד", synonyms: ["גמול חינוך מיוחד"], matchType: "exact" },
  { label: "קצובת ביגוד", synonyms: ["קצובת ביגוד"], matchType: "exact" },
  { label: "קצובה", synonyms: ["קצובה"], matchType: "exact" },
  { label: "תוספת עידוד", synonyms: ["תוספת עידוד"], matchType: "exact" },

  // ניכויי חובה
  { label: "מס הכנסה", synonyms: ["מס הכנסה"], matchType: "exact" },
  { label: "ביטוח לאומי", synonyms: ["ביטוח לאומי"], matchType: "exact" },
  { label: "הפרש ביטוח לאומי", synonyms: ["הפרש ביטוח לאומי"], matchType: "exact" },
  { label: "ביטוח בריאות", synonyms: ["ביטוח בריאות"], matchType: "exact" },
  { label: "הפרש ביטוח בריאות", synonyms: ["הפרש ביטוח בריאות"], matchType: "exact" },

  // ניכויי גמל
  { label: "קופ\"ח", synonyms: ["קופ\"ח"], matchType: "exact" },
  { label: "קרן השתלמות", synonyms: ["קרן השתלמות", "קה\"ש"], matchType: "exact" },
  { label: "מנורה מבטחים", synonyms: ["מנורה מבטחים"], matchType: "exact" },
  { label: "מנורה פנסיה", synonyms: ["מנורה פנסיה"], matchType: "exact" },
  { label: "אלטשולר שחם", synonyms: ["אלטשולר שחם"], matchType: "exact" },

  // סיכומים
  { label: "סה\"כ תשלומים", synonyms: ["סה\"כ תשלומים"], matchType: "exact" },
  { label: "סה\"כ ניכויי חובה", synonyms: ["סה\"כ ניכויי חובה"], matchType: "exact" },
  { label: "סה\"כ ניכויי גמל", synonyms: ["סה\"כ ניכויי גמל"], matchType: "exact" },
  { label: "סה\"כ ניכויים אחרים", synonyms: ["סה\"כ ניכויים אחרים"], matchType: "exact" },
  { label: "נטו לתשלום", synonyms: ["נטו לתשלום", "סכום בבנק"], matchType: "exact" },
  { label: "נטו שלילי", synonyms: ["נטו שלילי"], matchType: "exact" },

  // טריגר ייחודי
  { label: "אופק חדש", synonyms: ["אופק חדש"], matchType: "exact" },
  { label: "סה״כ תשלומים", synonyms: ["סה״כ תשלומים"], matchType: "exact" },
  { label: "נטו לתשלום", synonyms: ["נטו לתשלום"], matchType: "exact" },
  { label: "ניכוי חובה - מס הכנסה", synonyms: ["ניכוי חובה - מס הכנסה"], matchType: "exact" },
  { label: "ניכוי חובה - ביטוח לאומי", synonyms: ["ניכוי חובה - ביטוח לאומי"], matchType: "exact" },
  { label: "ניכוי חובה - בריאות", synonyms: ["ניכוי חובה - בריאות"], matchType: "exact" },
  { label: "סה״כ ניכוי חובה", synonyms: ["סה״כ ניכוי חובה"], matchType: "exact" },
  { label: "סה״כ ניכויים", synonyms: ["סה״כ ניכויים"], matchType: "exact" },
  { label: "שווי מתנות", synonyms: ["שווי מתנות"], matchType: "exact" },
  { label: "סה״כ שכר חייב במס", synonyms: ["סה״כ שכר חייב במס"], matchType: "exact" },
  { label: "סה״כ שכר מבוטח", synonyms: ["סה״כ שכר מבוטח"], matchType: "exact" },
  { label: "סה״כ קרן השתלמות", synonyms: ["סה״כ קרן השתלמות"], matchType: "exact" },
  { label: "קופת גמל במשלם", synonyms: ["קופת גמל במשלם"], matchType: "exact" },
  { label: "קופת גמל מעביד", synonyms: ["קופת גמל מעביד"], matchType: "exact" },
  { label: "סה״כ הפרשות גמל", synonyms: ["סה״כ הפרשות גמל"], matchType: "exact" },
  { label: "ניכוי התחייבות", synonyms: ["ניכוי התחייבות"], matchType: "exact" },
  { label: "סה״כ ניכוי התחייבות", synonyms: ["סה״כ ניכוי התחייבות"], matchType: "exact" },
  { label: "פרטי נקודות זיכוי", synonyms: ["פרטי נקודות זיכוי"], matchType: "exact" },
  { label: "תושב ישראל", synonyms: ["תושב ישראל"], matchType: "exact" },
  { label: "סה״כ נקודות זיכוי", synonyms: ["סה״כ נקודות זיכוי"], matchType: "exact" },
  { label: "פרטי תעריפים", synonyms: ["פרטי תעריפים"], matchType: "exact" },
  { label: "ת.שעה", synonyms: ["ת.שעה"], matchType: "exact" },
  { label: "ת.חודשית", synonyms: ["ת.חודשית"], matchType: "exact" },
  { label: "ת.יומית", synonyms: ["ת.יומית"], matchType: "exact" },
  { label: "פרטי התשלומים", synonyms: ["פרטי התשלומים"], matchType: "exact" },
  { label: "ש״ח תשלומים בגין הוצאות", synonyms: ["ש״ח תשלומים בגין הוצאות"], matchType: "exact" },
  { label: "מ״ח תשלומים בגין הוצאות", synonyms: ["מ״ח תשלומים בגין הוצאות"], matchType: "exact" },
  { label: "ש״ח תשלומים בגין אחרים", synonyms: ["ש״ח תשלומים בגין אחרים"], matchType: "exact" },
  { label: "מ״ח תשלומים בגין אחרים", synonyms: ["מ״ח תשלומים בגין אחרים"], matchType: "exact" },
  { label: "ש״ח בגין עבודה נוספת", synonyms: ["ש״ח בגין עבודה נוספת"], matchType: "exact" },
  { label: "ניכוי זקיפת שווי", synonyms: ["ניכוי זקיפת שווי"], matchType: "exact" },
  { label: "ניכוי רכב פרטי", synonyms: ["ניכוי רכב פרטי"], matchType: "exact" },
  { label: "מזוהה מעביד", synonyms: ["מזוהה מעביד"], matchType: "exact" },
  { label: "מספר עובד", synonyms: ["מספר עובד"], matchType: "exact" },
  { label: "שם העובד", synonyms: ["שם העובד"], matchType: "exact" },
  { label: "מספר סניף", synonyms: ["מספר סניף"], matchType: "exact" },
  { label: "שיעור משרה", synonyms: ["שיעור משרה"], matchType: "exact" },
  { label: "ותק", synonyms: ["ותק"], matchType: "exact" },
  { label: "תאריך תחילת עבודה", synonyms: ["תאריך תחילת עבודה"], matchType: "exact" },
  { label: "תאריך נוכחי", synonyms: ["תאריך נוכחי"], matchType: "exact" },
  { label: "מוסד פנסיוני", synonyms: ["מוסד פנסיוני"], matchType: "exact" },
  { label: "קוד סוכן", synonyms: ["קוד סוכן"], matchType: "exact" },
  { label: "מספר חשבון", synonyms: ["מספר חשבון"], matchType: "exact" },
  { label: "פרטי העובד", synonyms: ["פרטי העובד"], matchType: "exact" },
  { label: "הבראה", synonyms: ["הבראה"], matchType: "exact" },
  { label: "חופשה שנתית", synonyms: ["חופשה שנתית"], matchType: "exact" },
  { label: "זכאות חודש", synonyms: ["זכאות חודש"], matchType: "exact" },
  { label: "יתרה חדשה", synonyms: ["יתרה חדשה"], matchType: "exact" },
  { label: "ניצול מצטבר", synonyms: ["ניצול מצטבר"], matchType: "exact" },
  { label: "זכאות מצטברת", synonyms: ["זכאות מצטברת"], matchType: "exact" },
  { label: "נתונים נוספים עפ״י חוק", synonyms: ["נתונים נוספים עפ״י חוק"], matchType: "exact" },
  { label: "שכר מינימום", synonyms: ["שכר מינימום"], matchType: "exact" },
  { label: "שכר מינימום לשעה", synonyms: ["שכר מינימום לשעה"], matchType: "exact" },
  { label: "שכר כולל", synonyms: ["שכר כולל"], matchType: "exact" },
  { label: "סה״כ שעות החודש", synonyms: ["סה״כ שעות החודש"], matchType: "exact" },
  { label: "סה״כ תעריף", synonyms: ["סה״כ תעריף"], matchType: "exact" },
  { label: "הודעה לעובד", synonyms: ["הודעה לעובד"], matchType: "exact" },
  { label: "אתר מידע לעובד", synonyms: ["אתר מידע לעובד"], matchType: "exact" },
  { label: "הערות כלליות", synonyms: ["הערות כלליות"], matchType: "exact" },
 // נתונים שקשורים לשווי והטבות
  { label: "שווי שימוש ברכב", synonyms: ["שווי שימוש ברכב", "ניכוי רכב פרטי"], matchType: "includes" },
  { label: "שווי ארוחות", synonyms: ["שווי ארוחות", "שכר שווה כסף", "זקיפת שווי"], matchType: "includes" },

  // נתונים מסכמים לצורכי מס
  { label: "הכנסה חייבת בביטוח לאומי", synonyms: ["הכנסה חייבת ב.ל", "הכנסה חייבת לביטוח לאומי"], matchType: "includes" },
  { label: "הכנסה חייבת למס", synonyms: ["הכנסה חייבת למס", "ברוטו למס"], matchType: "includes" },
  { label: "ברוטו למס רגיל", synonyms: ["ברוטו למס רגיל"], matchType: "includes" },

  // יחידות מס או סיכום שנתי
  { label: "יחידות מס", synonyms: ["יחידות מס", "סך יח"], matchType: "includes" },

  // פנסיה/גמל/השתלמות - הפרשות באחוזים
  { label: "הפרשות לגמל באחוזים", synonyms: ["% מעסיק לגמל", "% עובד לגמל"], matchType: "includes" },
  { label: "הפרשות לקרן השתלמות באחוזים", synonyms: ["% עובד להשתלמות", "% מעסיק להשתלמות"], matchType: "includes" },

  // נתוני ניצול חודשי
  { label: "ניצול חודש זה", synonyms: ["ניצול החודש", "ניצול חודשי"], matchType: "includes" },
  { label: "יתרה ניצול", synonyms: ["יתרה לניצול", "יתרה לשימוש"], matchType: "includes" },

  // קרנות בשמות מסחריים
  { label: "מנורה מבטחים", synonyms: ["מנורה מבטחים", "מנורה פנסיה"], matchType: "includes" },
  { label: "אלטשולר שחם", synonyms: ["אלטשולר שחם"], matchType: "includes" },

  // שעות עבודה מיוחדות
  { label: "שעות שבת", synonyms: ["שעות שבת", "גמול שבת"], matchType: "includes" },
  { label: "שעות גמול", synonyms: ["שעות גמול", "גמול שעות נוספות"], matchType: "includes" },
  { label: "שעות תקן לניצול", synonyms: ["שעות לניצול", "שעות חופשה לניצול"], matchType: "includes" },

  // נתוני חוק הגנת השכר
  { label: "חוק הגנת השכר", synonyms: ["חוק הגנת השכר", "נתונים נוספים עפ\"י חוק"], matchType: "includes" },
  { label: "שכר לקצבה", synonyms: ["שכר לקצבה"], matchType: "includes" },

  // קרנות
  { label: "קרן פנסיה", synonyms: ["קרן פנסיה", "קופת גמל", "קופ\"ג"], matchType: "includes" },
  { label: "קרן השתלמות מבטחים", synonyms: ["קרן השתלמות מבטחים", "קה\"ש מבטחים"], matchType: "includes" }
];
