import BaseModule from '../BaseModule';

export function convertObj(query) {
  const result = [];
  Object.keys(query).forEach((key) => {
    const value = query[key];
    if (value !== undefined && value.constructor === Array) {
      value.forEach((_value) => {
        result.push(`${key}=${_value}`);
      });
    } else if (value !== undefined) {
      result.push(`${key}=${value}`);
    }
  });
  return result.join('&');
}

class ReportInterface extends BaseModule {
  remove(id) {
    return this.delete(`/report_info/${id}`);
  }
  batchRemove(params) {
    return this.post('/report_info/deleted_report', params);
  }
  getReportDetail(id) {
    return this.get(`/report_info/${id}`);
  }
  addNewReport(params) {
    return this.post('/report_info/save', params);
  }
  update(params) {
    return this.put(`/report_info/update/${params.id}`, params);
  }
  fetchReportList(params) {
    return this.post('/report_info/list_page', params);
  }
  getAbnormalList(params) {
    return this.post('/organ_abnormal/list_page', params);
  }
  abnormalListPages(params) {
    return this.post('/group_abnormal/list_page', params);
  }
  getAbnormalAliasList(params) {
    return this.get(`/organ_abnormal_alias/list_page?${convertObj(params)}`);
  }
  getOrganList(params) {
    return this.post('/organ_item/list_page', params);
  }
  getOrganType() {
    return this.get('/organ_item_library/list');
  }
  getTemplate(params) {
    return this.post('/report_template/list_page', params);
  }
  getTemplateDetail(id) {
    return this.get(`/report_template/detail_by_report/${id}`);
  }
  getTcmList() {
    return this.get('/intervene_template/get_tcm_list');
  }
  getriskList(id) {
    return this.get(`/home/get_newest_question_risk_factor/${id}`);
  }
  getriskListdate(id) {
    return this.get(`/home/get_question_risk_factor/${id}`);
  }
}

export default new ReportInterface();
