//
//  SSHolidayUS.h
//  SSLunarDate
//
//  Created by Jiejing Zhang on 13-8-25.
//  Copyright (c) 2013年 Jiejing Zhang. All rights reserved.
//

#import "SSHolidayCountry.h"

@interface SSHolidayUS : SSHolidayCountry

- (NSArray *) getHolidayListForDate:(NSDate *)date;


@end
