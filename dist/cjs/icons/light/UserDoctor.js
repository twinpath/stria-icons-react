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
var UserDoctor_exports = {};
__export(UserDoctor_exports, {
  default: () => UserDoctor_default
});
module.exports = __toCommonJS(UserDoctor_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserDoctorLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M274.664 304H173.336C77.609 304 0 381.602 0 477.332C0 496.477 15.523 512 34.664 512H413.336C432.477 512 448 496.477 448 477.332C448 381.602 370.398 304 274.664 304ZM160 400C168.822 400 176 407.178 176 416S168.822 432 160 432S144 424.822 144 416S151.178 400 160 400ZM413.336 480H34.664C33.195 480 32 478.803 32 477.332C32 409.467 80.113 352.705 144 339.152V370.938C125.4 377.549 112 395.131 112 416C112 442.51 133.49 464 160 464S208 442.51 208 416C208 395.131 194.6 377.549 176 370.938V336H274.664C279.23 336 283.543 336.922 288 337.348V370.947C269.416 377.574 256 395.168 256 416V448C256 456.844 263.156 464 272 464S288 456.844 288 448V416C288 407.172 295.172 400 304 400S320 407.172 320 416V448C320 456.844 327.156 464 336 464S352 456.844 352 448V416C352 395.168 338.584 377.574 320 370.947V344.129C375.631 363.137 416 415.346 416 477.332C416 478.803 414.805 480 413.336 480ZM224 256C294.695 256 352 198.691 352 128S294.695 0 224 0C153.312 0 96 57.309 96 128S153.312 256 224 256ZM224 32C276.936 32 320 75.064 320 128C320 180.934 276.936 224 224 224S128 180.934 128 128C128 75.064 171.064 32 224 32Z" })
  }
));
UserDoctorLight.displayName = "UserDoctorLight";
var UserDoctor_default = UserDoctorLight;
