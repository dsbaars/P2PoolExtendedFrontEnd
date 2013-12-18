function ChangeCurrentPeriod(p_Period, p_Sender)
			{
				period=p_Period;
				$('#scale_menu li').removeClass('active');
				$('#' + p_Sender).addClass('active');
				document.location.href =  "?" + period;
			}