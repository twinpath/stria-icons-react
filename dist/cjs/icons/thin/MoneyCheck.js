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
var MoneyCheck_exports = {};
__export(MoneyCheck_exports, {
  default: () => MoneyCheck_default
});
module.exports = __toCommonJS(MoneyCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MoneyCheckThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504 336H392C387.594 336 384 339.578 384 344S387.594 352 392 352H504C508.406 352 512 348.422 512 344S508.406 336 504 336ZM280 240H72C67.594 240 64 243.578 64 248S67.594 256 72 256H280C284.406 256 288 252.422 288 248S284.406 240 280 240ZM248 336H72C67.594 336 64 339.578 64 344S67.594 352 72 352H248C252.406 352 256 348.422 256 344S252.406 336 248 336ZM528 64H48C21.49 64 0 85.49 0 112V400C0 426.51 21.49 448 48 448H528C554.51 448 576 426.51 576 400V112C576 85.49 554.51 64 528 64ZM560 400C560 417.645 545.645 432 528 432H48C30.355 432 16 417.645 16 400V112C16 94.355 30.355 80 48 80H528C545.645 80 560 94.355 560 112V400ZM496 160H368C359.164 160 352 167.164 352 176V240C352 248.836 359.164 256 368 256H496C504.836 256 512 248.836 512 240V176C512 167.164 504.836 160 496 160ZM496 240H368V176H496V240Z" })
  }
));
MoneyCheckThin.displayName = "MoneyCheckThin";
var MoneyCheck_default = MoneyCheckThin;
