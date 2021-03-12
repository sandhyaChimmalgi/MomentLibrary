     this.state.month = startDate.substring(4,8).trim();
      console.log(this.state.month);
      this.state.year = startDate.substring(11,15);
      console.log(this.state.year);
      this.state.date = startDate.substring(8,10);
      console.log(this.state.date);
      switch(this.state.month){
        case 'Jan': this.setState({
          monthNumber:'01'
        }); break;
        case 'Feb': this.setState({
          monthNumber:'02'
        }); break;
        case 'Mar': this.setState({
          monthNumber:'03'
        }); break;
        case 'Apr': this.setState({
          monthNumber:'04'
        }); break;
        case 'May': this.setState({
          monthNumber:'05'
        }); break;
        case 'Jun': this.setState({
          monthNumber:'06'
        }); break;
        case 'Jul': this.setState({
          monthNumber:'07'
        }); break;
        case 'Aug': this.setState({
          monthNumber:'01'
        }); break;
        case 'Sep': this.setState({
          monthNumber:'01'
        }); break;
        case 'Oct': this.setState({
          monthNumber:'01'
        }); break;
        case 'Nov': this.setState({
          monthNumber:'01'
        }); break;
        case 'Dec': this.setState({
          monthNumber:'01'
        }); break;
        default:break;
      }
      this.setState({
        finalDate: this.state.date+'/'+ this.state.monthNumber+'/'+this.state.year
      });
    