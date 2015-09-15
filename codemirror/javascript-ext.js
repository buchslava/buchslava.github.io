CodeMirror.commands.autocomplete = function (cm) {
  var doc = cm.getDoc();
  var pos = doc.getCursor();

  if (cm.getTokenAt(pos).string === '.') {
    if (CodeMirror.hint.completeAfterDot.isExpected(cm)) {
      CodeMirror.showHint(cm, CodeMirror.hint.completeAfterDot);
      return;
    }
  }

  CodeMirror.showHint(cm, CodeMirror.hint.javascript);
};

CodeMirror.fromTextArea(document.getElementById('code'), {
  lineNumbers: true,
  extraKeys: {'Ctrl-Space': 'autocomplete'},
  theme: 'cobalt'
});
