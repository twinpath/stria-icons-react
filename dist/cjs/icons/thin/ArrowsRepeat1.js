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
var ArrowsRepeat1_exports = {};
__export(ArrowsRepeat1_exports, {
  default: () => ArrowsRepeat1_default
});
module.exports = __toCommonJS(ArrowsRepeat1_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsRepeat1Thin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M419.428 103.996L338.594 178.092C336.875 179.678 336 181.841 336 184.007C336 188.438 339.618 191.998 344 191.998C345.938 191.998 347.875 191.311 349.406 189.904L445.406 101.902C447.062 100.371 448 98.246 448 95.996S447.062 91.621 445.406 90.09L349.406 2.09C347.89 0.691 345.964 0 344.036 0C339.652 0 336 3.518 336 7.987C336 10.153 336.875 12.316 338.594 13.902L419.428 87.996H168C75.359 87.996 0 163.373 0 255.998C0 260.404 3.578 263.998 8 263.998S16 260.404 16 255.998C16 172.186 84.188 103.996 168 103.996H419.428ZM504 247.998C499.578 247.998 496 251.592 496 255.998C496 339.811 427.812 408 344 408H92.572L173.406 333.904C175.125 332.318 176 330.155 176 327.989C176 323.581 172.414 320.002 167.987 320.002C166.058 320.002 164.125 320.693 162.594 322.092L66.594 410.094C64.938 411.625 64 413.75 64 416S64.938 420.375 66.594 421.906L162.594 509.906C164.125 511.312 166.062 512 168 512C172.378 512 176 508.443 176 504.009C176 501.843 175.125 499.68 173.406 498.094L92.572 424H344C436.641 424 512 348.623 512 255.998C512 251.592 508.422 247.998 504 247.998ZM264 320C268.422 320 272 316.406 272 312V200C272 195.594 268.422 192 264 192H240C235.578 192 232 195.594 232 200S235.578 208 240 208H256V312C256 316.406 259.578 320 264 320Z " })
  }
));
ArrowsRepeat1Thin.displayName = "ArrowsRepeat1Thin";
var ArrowsRepeat1_default = ArrowsRepeat1Thin;
