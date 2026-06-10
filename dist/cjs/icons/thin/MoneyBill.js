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
var MoneyBill_exports = {};
__export(MoneyBill_exports, {
  default: () => MoneyBill_default
});
module.exports = __toCommonJS(MoneyBill_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MoneyBillThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528 64H48C21.492 64 0 85.492 0 112V400C0 426.508 21.492 448 48 448H528C554.512 448 576 426.508 576 400V112C576 85.492 554.512 64 528 64ZM560 400C560 417.645 545.645 432 528 432H48C30.355 432 16 417.645 16 400V112C16 94.355 30.355 80 48 80H528C545.645 80 560 94.355 560 112V400ZM288 160C243.816 160 208 202.98 208 256C208 309.018 243.816 352 288 352S368 309.018 368 256C368 202.98 332.184 160 288 160ZM288 336C252.711 336 224 300.111 224 256S252.711 176 288 176C323.291 176 352 211.889 352 256S323.291 336 288 336ZM528 328C488.297 328 456 360.297 456 400C456 404.422 459.578 408 464 408S472 404.422 472 400C472 369.125 497.125 344 528 344C532.422 344 536 340.422 536 336S532.422 328 528 328ZM112 104C107.578 104 104 107.578 104 112C104 142.875 78.875 168 48 168C43.578 168 40 171.578 40 176S43.578 184 48 184C87.703 184 120 151.703 120 112C120 107.578 116.422 104 112 104ZM48 328C43.578 328 40 331.578 40 336S43.578 344 48 344C78.875 344 104 369.125 104 400C104 404.422 107.578 408 112 408S120 404.422 120 400C120 360.297 87.703 328 48 328ZM528 168C497.125 168 472 142.875 472 112C472 107.578 468.422 104 464 104S456 107.578 456 112C456 151.703 488.297 184 528 184C532.422 184 536 180.422 536 176S532.422 168 528 168Z" })
  }
));
MoneyBillThin.displayName = "MoneyBillThin";
var MoneyBill_default = MoneyBillThin;
