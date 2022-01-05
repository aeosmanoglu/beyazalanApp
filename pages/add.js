import Link from "next/link";
import Input from "../components/forms/input";
import Layout from "../components/Layout";
import TextArea from "../components/forms/text_area";
import Card from "../components/card";
import Dropdown from "../components/forms/dropdown";

function Add() {
  return (
    <div>
      <Layout title="Envanter Ekle" />

      <main className="container my-5">
        <h1 className="mb-5">Yeni Cihaz Ekle</h1>

        <form>
          <div className="row row-cols-1 row-cols-sm-2 g-4 mb-4">
            <div className="col">
              <Card title="Ön Bilgileri">
                <Input id="deviceTitle" label="Cihaz Adı" type="text" />
                <Input id="photo" label="Fotoğrafı" type="file" />
                <TextArea id="description" label="Açıklama" rows="4" />
              </Card>
            </div>

            <div className="col">
              <Card title="Cihaz">
                <div className="row row-cols-2">
                  <Input id="tradeMark" label="Marka" type="text" />
                  <Input id="model" label="Model" type="text" />
                </div>
                <Input id="serialNumber" label="Seri Numarası" type="text" />
                <Input id="manufacturer" label="Üretici" type="text" />
                <Input id="distributor" label="Dağıtıcı" type="text" />
              </Card>
            </div>

            <div className="col">
              <Card title="Yeri ve Önceliği">
                <Dropdown label="cabinetName" title="Cihazın Yeri">
                  <option value="1">Genel ağ</option>
                  <option value="2">Jnet ağı</option>
                </Dropdown>
                <div className="row row-cols-2 gx-3">
                  <Input id="cabinetNumber" label="Kabin No" type="number" />
                  <Input id="rack" label="Raf No" type="number" />
                  <Input id="off" label="Kapanış Önceliği" type="number" />
                  <Input id="on" label="Açılış Önceliği" type="number" />
                </div>
              </Card>
            </div>

            <div className="col">
              <Card title="Sorumlusu">
                <div className="row gx-3">
                  <div className="col-md-6">
                    <Input id="name" label="Adı" type="text" />
                  </div>
                  <div className="col-md-6">
                    <Input id="surname" label="Soyadı" type="text" />
                  </div>
                  <div className="col-12">
                    <Input
                      id="department"
                      label="Çalıştığı Birim"
                      type="text"
                    />
                  </div>
                  <div className="col-md-6">
                    <Input id="managerTitle" label="Rütbe" type="text" />
                  </div>
                  <div className="col-md-6">
                    <Input id="mobile" label="Cep Telefonu" type="number" />
                  </div>
                  <div className="col-md-8">
                    <Input id="email" label="Posta" type="mail" />
                  </div>
                  <div className="col-md-4">
                    <Input id="phone" label="Dahili" type="number" />
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <Link href="/">
              <a className="btn btn-secondary">
                <i className="bi bi-chevron-left"></i> İptal et ve Geri dön
              </a>
            </Link>
            <button class="btn btn-primary" type="button">
              Kaydet ve Devam Et
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Add;
