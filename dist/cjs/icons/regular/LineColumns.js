var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var LineColumns_exports = {};
__export(LineColumns_exports, {
  default: () => LineColumns_default
});
module.exports = __toCommonJS(LineColumns_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LineColumnsRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M200 168H24C10.745 168 0 178.745 0 192V192C0 205.255 10.745 216 24 216H200C213.255 216 224 205.255 224 192V192C224 178.745 213.255 168 200 168ZM200 296H24C10.745 296 0 306.745 0 320V320C0 333.255 10.745 344 24 344H200C213.255 344 224 333.255 224 320V320C224 306.745 213.255 296 200 296ZM200 40H24C10.745 40 0 50.745 0 64V64C0 77.255 10.745 88 24 88H200C213.255 88 224 77.255 224 64V64C224 50.745 213.255 40 200 40ZM200 424H24C10.745 424 0 434.745 0 448V448C0 461.255 10.745 472 24 472H200C213.255 472 224 461.255 224 448V448C224 434.745 213.255 424 200 424ZM488 40H312C298.745 40 288 50.745 288 64V64C288 77.255 298.745 88 312 88H488C501.255 88 512 77.255 512 64V64C512 50.745 501.255 40 488 40ZM488 168H312C298.745 168 288 178.745 288 192V192C288 205.255 298.745 216 312 216H488C501.255 216 512 205.255 512 192V192C512 178.745 501.255 168 488 168ZM488 424H312C298.745 424 288 434.745 288 448V448C288 461.255 298.745 472 312 472H488C501.255 472 512 461.255 512 448V448C512 434.745 501.255 424 488 424ZM488 296H312C298.745 296 288 306.745 288 320V320C288 333.255 298.745 344 312 344H488C501.255 344 512 333.255 512 320V320C512 306.745 501.255 296 488 296Z" })
  }
));
LineColumnsRegular.displayName = "LineColumnsRegular";
var LineColumns_default = LineColumnsRegular;
