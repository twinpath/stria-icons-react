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
var MoneyBill1_exports = {};
__export(MoneyBill1_exports, {
  default: () => MoneyBill1_default
});
module.exports = __toCommonJS(MoneyBill1_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MoneyBill1Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 112H112C112 147.375 83.375 176 48 176V336C83.375 336 112 364.625 112 400H464C464 364.625 492.625 336 528 336V176C492.625 176 464 147.375 464 112ZM288 371.2C234.98 371.2 192 319.621 192 256C192 192.377 234.98 140.8 288 140.8S384 192.377 384 256C384 319.621 341.02 371.2 288 371.2Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M316.443 281.6H307.201V201.957C307.201 196.512 302.688 192 297.244 192H268.801C265.068 192 262.326 194.178 260.615 197.443L250.662 215.934C249.107 219.043 249.264 222.777 251.125 225.734C252.838 228.535 256.107 230.4 259.525 230.4H268.801V281.6H259.557C254.113 281.6 249.6 286.113 249.6 291.557V310.043C249.6 315.488 254.113 320 259.557 320H316.443C321.889 320 326.4 315.488 326.4 310.043V291.557C326.4 286.113 321.889 281.6 316.443 281.6ZM528 64H48C21.492 64 0 85.492 0 112V400C0 426.508 21.492 448 48 448H528C554.512 448 576 426.508 576 400V112C576 85.492 554.512 64 528 64ZM528 336C492.625 336 464 364.625 464 400H112C112 364.625 83.375 336 48 336V176C83.375 176 112 147.375 112 112H464C464 147.375 492.625 176 528 176V336Z" })
    ]
  }
));
MoneyBill1Duotone.displayName = "MoneyBill1Duotone";
var MoneyBill1_default = MoneyBill1Duotone;
