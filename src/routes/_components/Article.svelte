<script context="module">
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  export const formatDate = (date) => {
    if (!date) return;
    const d = new Date(date);
    const year = d.getFullYear(); // 2019
    const dateNum = d.getDate(); // 23
    const monthName = months[d.getMonth()];

    const formattedDate = `${dateNum} ${monthName} ${year}`;

    return formattedDate;
  };
</script>

<script>
  export let article;
</script>

<style>
  .card-box {
    width: 30%;
    margin: 10px;
  }
</style>

<div class="card card-box">
  <div class="card-body">
    <h5 class="card-title">
      <a href={`/article/${article._id}`}>{article.title}</a>
    </h5>
    <p class="card-text">
      {article.text.length > 200 ? article.text
            .substring(0, 200)
            .concat('...') : article.text}
    </p>
    <p class="card-text">
      <small class="text-muted">
        Date Published: {formatDate(article.date)}
      </small>
    </p>
  </div>
</div>
