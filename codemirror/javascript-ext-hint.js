(function (mod) {
  mod(CodeMirror);
})(function (CodeMirror) {
  'use strict';

  var hintBase = {
    'MyCoolCar': ['getExpensive(areYouSure)', 'getCheap()', 'getBig()'],
    'MyCoolPet': ['getCat(type)', 'getDog(type)', 'getMouse()']
  };

  function getPositionDescriptor(cm) {
    var cur = cm.getCursor();
    var currentToken = cm.getTokenAt(cur);
    var prevToken = cm.getTokenAt({line: cur.line, ch: cur.ch - 1});

    var start, end;
    if (currentToken.end > cur.ch) {
      currentToken.end = cur.ch;
      currentToken.string = currentToken.string.slice(0, cur.ch - currentToken.start);
    }

    if (currentToken.string.match(/^[.`\w@]\w*$/)) {
      start = currentToken.start;
      end = currentToken.end;
    } else {
      start = end = cur.ch;
    }

    return {
      currentToken: currentToken,
      prevToken: prevToken,
      currentPosition: cur,
      start: start,
      end: end
    };
  }

  function getOptions(positionDescriptor) {
    return hintBase[positionDescriptor.prevToken.string] || [];
  }

  function completeAfterDot(cm) {
    var pd = getPositionDescriptor(cm);
    return {
      list: getOptions(pd),
      from: CodeMirror.Pos(pd.currentPosition.line, pd.start + 1),
      to: CodeMirror.Pos(pd.currentPosition.line, pd.end)
    };
  }

  completeAfterDot.isExpected = function (cm) {
    return getOptions(getPositionDescriptor(cm)).length > 0;
  };

  CodeMirror.registerHelper('hint', 'completeAfterDot', completeAfterDot);
});
