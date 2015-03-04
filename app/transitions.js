export default function() {
  this.transition(
    this.hasClass('magical'),
    this.toModel(true),
    this.use('toDown'),
    this.reverse('toUp')
  );
}
