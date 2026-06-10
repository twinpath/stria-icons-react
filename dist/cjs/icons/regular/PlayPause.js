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
var PlayPause_exports = {};
__export(PlayPause_exports, {
  default: () => PlayPause_default
});
module.exports = __toCommonJS(PlayPause_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlayPauseRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488 64C474.746 64 464 74.746 464 88V424C464 437.254 474.746 448 488 448S512 437.254 512 424V88C512 74.746 501.254 64 488 64ZM344 64C330.746 64 320 74.746 320 88V424C320 437.254 330.746 448 344 448S368 437.254 368 424V88C368 74.746 357.254 64 344 64ZM32.217 448C39.219 448 46.361 445.695 52.506 440.594L244.529 280.621C259.781 267.748 259.781 244.252 244.529 231.379L52.506 71.406C46.361 66.307 39.217 64 32.217 64C15.713 64 0 76.809 0 96.027V415.973C0 435.189 15.715 448 32.217 448ZM48 130.127L199.094 256L48 381.875V130.127Z" })
  }
));
PlayPauseRegular.displayName = "PlayPauseRegular";
var PlayPause_default = PlayPauseRegular;
