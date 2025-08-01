let sess;
let separ = ";;";
const valueSepar = "~"
sess = make();

// alert(sess);

function make() {
    sess = prompt("", "Введите тему созданного фрагмента");
    if (/;;/.test(sess)) {
        let study = sess.slice(sess.indexOf(separ) + 2);
        sess = sess.replace(study, creatingPortionForTheDB(study));
        return sess;
    } else {
        sess = sess + creatingPortionForTheDB(study = separ + prompt('ДЛЯ ОПРЕДЕЛЕНИЯ ОТНОШЕНИЯ ФРАГМЕНТА ВИДЕО К НАСТРОЙКАМ (SETTING), ВВЕДИТЕ: "H"(РУССКАЯ РАСКЛАДКА) ИЛИ "S"(АНГЛИЙСКАЯ РАСКЛАДКА), К ЧАСТЫМ ВОПРОСАМ СОБЕСЕДОВАНИЙ (INTERVIEWS), ВВЕДИТЕ:"И"(РУССКАЯ РАСКЛАДКА) ИЛИ "I"(АНГЛИЙСКАЯ РАСКЛАДКА), К ИСПОЛЬЗОВАНИЮ СНИППЕТОВ (SNIPPETS), ВВЕДИТЕ: "С"(РУССКАЯ РАСКЛАДКА) ИЛИ "SN"(АНГЛИЙСКАЯ РАСКЛАДКА), К БАЗОВОЙ ИНФОРМАЦИИ ВВЕДИТЕ: "Б"(РУССКАЯ РАСКЛАДКА) ИЛИ "B" (АНГЛИЙСКАЯ РАСКЛАДКА), ЛИБО ВВЕДИТЕ ИНОЙ ЗНАЧАНИЕ ИЛИ ОТМЕНИТЕ ВВОД ЕСЛИ ФРАГМЕНТ НЕ ИМЕЕТ ТАКОЙ ПРИНАДЛЕЖНОСТИ'));
        return sess;
    }



    function creatingPortionForTheDB(implementationStudy) {

        let study_basics = "0", study_interviews = "0", study_settings = "0", study_snippets = "0", study_full = "0";
        if (implementationStudy.toLowerCase().includes("б")) { study_basics = "1" };
        if (implementationStudy.toLowerCase().includes("b")) { study_basics = "1" };
        if (implementationStudy.toLowerCase().includes("и")) { study_interviews = "1" };
        if (implementationStudy.toLowerCase().includes("i")) { study_interviews = "1" };
        if (implementationStudy.toLowerCase().includes("с")) { study_snippets = "1" };
        if (implementationStudy.toLowerCase().includes("s" && "n")) { study_snippets = "1"; implementationStudy = implementationStudy.toLowerCase().replace(/sn/g, "")};
        if (implementationStudy.toLowerCase().includes("н")) { study_settings = "1" };
        if (implementationStudy.toLowerCase().includes("s") && (implementationStudy.toLowerCase().includes("n")) === false) { study_settings = "1" };
       
        
        study_full = valueSepar + study_settings + valueSepar + study_interviews + valueSepar + study_snippets + valueSepar + study_basics;

        return study_full
    }
}