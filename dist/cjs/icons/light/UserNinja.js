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
var UserNinja_exports = {};
__export(UserNinja_exports, {
  default: () => UserNinja_default
});
module.exports = __toCommonJS(UserNinja_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserNinjaLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 128H272C280.844 128 288 120.844 288 112S280.844 96 272 96H176C167.157 96 160 103.156 160 112S167.157 128 176 128ZM36.688 187.312C39.813 190.438 43.907 192 48 192S56.188 190.438 59.313 187.312L98.071 148.555C107.955 209.412 160.348 256 224 256C294.694 256 352 198.691 352 128C352 57.307 294.694 0 224 0C169.504 0 123.282 34.199 104.813 82.188L59.313 36.688C53.063 30.438 42.938 30.438 36.688 36.688S30.438 53.063 36.688 59.312L89.375 112L36.688 164.688C30.438 170.938 30.438 181.062 36.688 187.312ZM224 32C276.936 32 320 75.064 320 128C320 180.934 276.936 224 224 224S128 180.934 128 128C128 75.064 171.065 32 224 32ZM349.368 291.295C348.329 290.797 328.551 281.137 312.258 297.424L224 385.674L135.743 297.424C119.45 281.137 99.672 290.797 98.633 291.295C40.036 319.289 -0.48 378.609 0.004 448.008V480.004C0.004 497.674 14.33 512 32.004 512H415.996C433.67 512 447.996 497.674 447.996 480.004V448.008C448.481 378.609 407.965 319.289 349.368 291.295ZM208.002 480.004H32.004V447.783C31.621 392.949 62.438 344.047 112.428 320.164C112.6 320.082 208.002 414.926 208.002 414.926V480.004ZM415.996 480.004H239.998V414.926C239.998 414.926 335.401 320.082 335.573 320.164C385.563 344.047 416.379 392.949 415.996 447.783V480.004Z" })
  }
));
UserNinjaLight.displayName = "UserNinjaLight";
var UserNinja_default = UserNinjaLight;
