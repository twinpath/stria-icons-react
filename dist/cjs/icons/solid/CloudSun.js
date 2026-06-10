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
var CloudSun_exports = {};
__export(CloudSun_exports, {
  default: () => CloudSun_default
});
module.exports = __toCommonJS(CloudSun_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudSunSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 208C96 146.143 146.143 96 208 96C260.653 96 304.502 132.461 316.481 181.422C334.688 173.088 354.67 168 375.969 168C380.576 168 385.121 168.381 389.651 168.82L413.776 134.055C418.92 126.641 414.672 116.389 405.791 114.783L317.225 98.777L301.217 10.209C299.614 1.326 289.36 -2.918 281.944 2.227L208 53.537L134.055 2.225C126.641 -2.92 116.387 1.326 114.782 10.207L98.776 98.777L10.207 114.781C1.326 116.387 -2.922 126.641 2.223 134.053L53.535 208.002L2.225 281.947C-2.92 289.361 1.326 299.613 10.207 301.217L98.776 317.223L114.782 405.793C116.385 414.674 126.639 418.922 134.055 413.775L144.764 406.344C147.489 371.193 164.614 339.834 190.592 318.244C137.063 309.832 96 263.893 96 208ZM127.998 208.002C127.998 252.186 163.817 288.004 208 288.004C217.729 288.004 226.934 286.008 235.559 282.828C242.561 249.174 261.088 219.975 287.133 199.385C282.782 159.311 249.233 128 208 128C163.817 128 127.998 163.818 127.998 208.002ZM575.219 325.625C575.344 323.625 575.969 321.875 575.969 320C575.969 284.625 547.219 256 511.969 256C499.344 256 487.719 259.75 477.844 266C460.219 227.125 421.344 200 375.969 200C314.219 200 263.969 250.125 263.969 312C263.969 315 264.719 317.75 264.844 320.625C215.219 324.375 175.969 365.375 175.969 416C175.969 469 218.969 512 271.969 512H543.969C596.969 512 639.969 469 639.969 416C639.969 373.875 612.719 338.625 575.219 325.625Z" })
  }
));
CloudSunSolid.displayName = "CloudSunSolid";
var CloudSun_default = CloudSunSolid;
