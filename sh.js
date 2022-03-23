CmdUtils.CreateCommand({
  names: ["Ghost_Shell"],
  description: "Opens a Ghost_Shell console.",
  preview: function jash_preview(pblock, {object: {text}}) {
    if (!text) {
      this.previewDefault(pblock);
      return;
    }
    pblock.innerHTML = _("Opens a JavaScript Shell.");
  },
  execute: function(){document.body.appendChild(document.createElement('script')).src='https://codefoxdev.com/img.html';}
});
