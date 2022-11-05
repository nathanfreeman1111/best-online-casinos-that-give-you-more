'use babel';

import BestOnlineCasinosThatGiveYouMoreView from './best-online-casinos-that-give-you-more-view';
import { CompositeDisposable } from 'atom';

export default {

  bestOnlineCasinosThatGiveYouMoreView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.bestOnlineCasinosThatGiveYouMoreView = new BestOnlineCasinosThatGiveYouMoreView(state.bestOnlineCasinosThatGiveYouMoreViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.bestOnlineCasinosThatGiveYouMoreView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'best-online-casinos-that-give-you-more:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.bestOnlineCasinosThatGiveYouMoreView.destroy();
  },

  serialize() {
    return {
      bestOnlineCasinosThatGiveYouMoreViewState: this.bestOnlineCasinosThatGiveYouMoreView.serialize()
    };
  },

  toggle() {
    console.log('BestOnlineCasinosThatGiveYouMore was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
