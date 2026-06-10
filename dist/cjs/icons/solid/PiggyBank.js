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
var PiggyBank_exports = {};
__export(PiggyBank_exports, {
  default: () => PiggyBank_default
});
module.exports = __toCommonJS(PiggyBank_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PiggyBankSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M255.984 96H383.991C389.366 96 394.741 96.375 399.866 96.75C399.866 96.5 399.991 96.25 399.991 96C399.991 43 356.989 0 303.987 0S207.982 43 207.982 96C207.982 98.125 208.482 100.125 208.607 102.25C223.733 98.25 239.609 96 255.984 96ZM559.999 224H530.498C521.747 204 508.872 186.25 493.121 171.5L511.997 96H479.995C450.619 96 424.618 109.5 406.992 130.25C399.366 129.25 391.866 128 383.991 128H255.984C178.606 128 114.103 183 99.227 256H55.975C41.224 256 29.473 242.5 32.474 227.25C34.724 215.75 45.349 208 56.975 208H57.975C61.225 208 63.975 205.25 63.975 202.001V182.001C63.975 178.75 61.225 176 57.975 176C29.473 176 4.097 196.375 0.472 224.625C-3.903 258.75 22.723 288 55.975 288H95.977C95.977 340.25 121.353 386.125 159.98 415.25V480C159.98 497.6 174.38 512 191.981 512H223.983C241.584 512 255.984 497.6 255.984 480V448H383.991V480C383.991 497.6 398.391 512 415.992 512H447.994C465.595 512 479.995 497.6 479.995 480V415.25C491.746 406.375 502.246 395.875 511.247 384H559.999C568.8 384 576 376.8 576 368V240C576 231.2 568.8 224 559.999 224ZM431.993 288C423.243 288 415.992 280.75 415.992 272S423.243 256 431.993 256S447.994 263.25 447.994 272S440.743 288 431.993 288Z" })
  }
));
PiggyBankSolid.displayName = "PiggyBankSolid";
var PiggyBank_default = PiggyBankSolid;
