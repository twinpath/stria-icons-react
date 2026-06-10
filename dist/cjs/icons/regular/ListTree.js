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
var ListTree_exports = {};
__export(ListTree_exports, {
  default: () => ListTree_default
});
module.exports = __toCommonJS(ListTree_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ListTreeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M184 120H488C501.25 120 512 109.25 512 96S501.25 72 488 72H184C170.75 72 160 82.75 160 96S170.75 120 184 120ZM208 208H144C135.141 208 128 215.141 128 224V232H72V144H80C88.859 144 96 136.859 96 128V64C96 55.141 88.859 48 80 48H16C7.141 48 0 55.141 0 64V128C0 136.859 7.141 144 16 144H24V384C24 414.875 49.125 440 80 440H128V448C128 456.875 135.141 464 144 464H208C216.859 464 224 456.875 224 448V384C224 375.125 216.859 368 208 368H144C135.141 368 128 375.125 128 384V392H80C75.594 392 72 388.406 72 384V280H128V288C128 296.875 135.141 304 144 304H208C216.859 304 224 296.875 224 288V224C224 215.141 216.859 208 208 208ZM488 392H312C298.75 392 288 402.75 288 416S298.75 440 312 440H488C501.25 440 512 429.25 512 416S501.25 392 488 392ZM488 232H312C298.75 232 288 242.75 288 256S298.75 280 312 280H488C501.25 280 512 269.25 512 256S501.25 232 488 232Z" })
  }
));
ListTreeRegular.displayName = "ListTreeRegular";
var ListTree_default = ListTreeRegular;
