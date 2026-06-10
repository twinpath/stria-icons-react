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
var CloudHail_exports = {};
__export(CloudHail_exports, {
  default: () => CloudHail_default
});
module.exports = __toCommonJS(CloudHail_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudHailLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M56 464C42.75 464 32 474.75 32 488S42.75 512 56 512S80 501.25 80 488S69.25 464 56 464ZM184 464C170.75 464 160 474.75 160 488S170.75 512 184 512S208 501.25 208 488S197.25 464 184 464ZM248 368C234.75 368 224 378.75 224 392S234.75 416 248 416S272 405.25 272 392S261.25 368 248 368ZM120 368C106.75 368 96 378.75 96 392S106.75 416 120 416S144 405.25 144 392S133.25 368 120 368ZM376 368C362.75 368 352 378.75 352 392S362.75 416 376 416S400 405.25 400 392S389.25 368 376 368ZM312 464C298.75 464 288 474.75 288 488S298.75 512 312 512S336 501.25 336 488S325.25 464 312 464ZM414.688 112.219C407.156 66.75 367.562 32 320 32C301.031 32 282.906 37.469 267.406 47.688C246.688 18.219 212.594 0 176 0C114.25 0 64 50.25 64 112C64 114.719 64.094 117.438 64.312 120.188C25.844 136.062 0 173.656 0 216C0 273.344 46.656 320 104 320H408C465.344 320 512 273.344 512 216C512 160.906 468.938 115.688 414.688 112.219ZM408 288H104C64.312 288 32 255.688 32 216C32 183.406 54.188 154.875 85.969 146.625C94.187 144.469 99.312 136.281 97.625 127.969C96.562 122.781 96 117.469 96 112C96 67.875 131.875 32 176 32C206.969 32 235.406 50.312 248.469 78.625C250.656 83.406 255.062 86.812 260.25 87.687C265.438 88.781 270.719 86.937 274.406 83.156C286.562 70.812 302.75 64 320 64C355.281 64 384 92.719 384 128C384 136.844 391.156 144 400 144H408C447.688 144 480 176.312 480 216S447.688 288 408 288Z" })
  }
));
CloudHailLight.displayName = "CloudHailLight";
var CloudHail_default = CloudHailLight;
