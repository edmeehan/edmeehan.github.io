const loadScript = (path) => {
  const ref = document.getElementsByTagName('script')[0],
    script = document.createElement('script');

  script.src = path;
  ref.parentNode.insertBefore(script, ref);
};

export { loadScript };
