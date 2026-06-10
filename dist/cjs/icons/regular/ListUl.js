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
var ListUl_exports = {};
__export(ListUl_exports, {
  default: () => ListUl_default
});
module.exports = __toCommonJS(ListUl_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ListUlRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M48 224C30.334 224 16 238.332 16 256C16 273.666 30.334 288 48 288S80 273.666 80 256C80 238.332 65.666 224 48 224ZM48 64C30.334 64 16 78.332 16 96C16 113.666 30.334 128 48 128S80 113.666 80 96C80 78.332 65.666 64 48 64ZM48 384C30.334 384 16 398.332 16 416C16 433.666 30.334 448 48 448S80 433.666 80 416C80 398.332 65.666 384 48 384ZM488 72H184C170.745 72 160 82.745 160 96V96C160 109.255 170.745 120 184 120H488C501.255 120 512 109.255 512 96V96C512 82.745 501.255 72 488 72ZM488 392H184C170.745 392 160 402.745 160 416V416C160 429.255 170.745 440 184 440H488C501.255 440 512 429.255 512 416V416C512 402.745 501.255 392 488 392ZM488 232H184C170.745 232 160 242.745 160 256V256C160 269.255 170.745 280 184 280H488C501.255 280 512 269.255 512 256V256C512 242.745 501.255 232 488 232Z" })
  }
));
ListUlRegular.displayName = "ListUlRegular";
var ListUl_default = ListUlRegular;
