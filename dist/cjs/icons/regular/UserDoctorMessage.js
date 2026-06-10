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
var UserDoctorMessage_exports = {};
__export(UserDoctorMessage_exports, {
  default: () => UserDoctorMessage_default
});
module.exports = __toCommonJS(UserDoctorMessage_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserDoctorMessageRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M592 0H432C405.49 0 384 21.492 384 48V176C384 202.508 405.49 224 432 224H448V279.973C448 286.473 455.5 290.305 460.75 286.473L543.994 224H592C618.51 224 640 202.508 640 176V48C640 21.492 618.51 0 592 0ZM272 304H176C78.953 304 0 382.953 0 480V488C0 501.25 10.75 512 24 512S48 501.25 48 488V480C48 423.475 85.076 375.941 136 359.033V402.602C109.629 410.51 91.293 437.002 97.066 467.076C101.111 488.143 117.742 505.625 138.643 510.455C175.371 518.943 208 491.281 208 456C208 430.672 191.076 409.521 168 402.602V352.809C170.697 352.639 173.26 352 176 352H272C274.74 352 277.303 352.639 280 352.809V402.611C256.951 409.549 240 430.723 240 456V496C240 504.844 247.156 512 256 512S272 504.844 272 496V456C272 442.766 282.766 432 296 432S320 442.766 320 456V496C320 504.844 327.156 512 336 512S352 504.844 352 496V456C352 430.723 335.049 409.549 312 402.611V359.033C362.924 375.941 400 423.475 400 480V488C400 501.25 410.75 512 424 512S448 501.25 448 488V480C448 382.953 369.047 304 272 304ZM176 456C176 469.232 165.234 480 152 480C138.768 480 128 469.232 128 456C128 442.766 138.768 432 152 432C165.234 432 176 442.766 176 456ZM224 256C294.693 256 352 198.691 352 128C352 57.307 294.693 0 224 0S96 57.307 96 128C96 198.691 153.307 256 224 256ZM224 48C268.111 48 304 83.887 304 128C304 172.111 268.111 208 224 208S144 172.111 144 128C144 83.887 179.889 48 224 48Z" })
  }
));
UserDoctorMessageRegular.displayName = "UserDoctorMessageRegular";
var UserDoctorMessage_default = UserDoctorMessageRegular;
