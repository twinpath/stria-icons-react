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
var List_exports = {};
__export(List_exports, {
  default: () => List_default
});
module.exports = __toCommonJS(List_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ListRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M80 208H16C7.125 208 0 215.125 0 224V288C0 296.875 7.125 304 16 304H80C88.875 304 96 296.875 96 288V224C96 215.125 88.875 208 80 208ZM80 368H16C7.125 368 0 375.125 0 384V448C0 456.875 7.125 464 16 464H80C88.875 464 96 456.875 96 448V384C96 375.125 88.875 368 80 368ZM80 48H16C7.125 48 0 55.125 0 64V128C0 136.875 7.125 144 16 144H80C88.875 144 96 136.875 96 128V64C96 55.125 88.875 48 80 48ZM488 232H184C170.745 232 160 242.745 160 256V256C160 269.255 170.745 280 184 280H488C501.255 280 512 269.255 512 256V256C512 242.745 501.255 232 488 232ZM488 72H184C170.745 72 160 82.745 160 96V96C160 109.255 170.745 120 184 120H488C501.255 120 512 109.255 512 96V96C512 82.745 501.255 72 488 72ZM488 392H184C170.745 392 160 402.745 160 416V416C160 429.255 170.745 440 184 440H488C501.255 440 512 429.255 512 416V416C512 402.745 501.255 392 488 392Z" })
  }
));
ListRegular.displayName = "ListRegular";
var List_default = ListRegular;
