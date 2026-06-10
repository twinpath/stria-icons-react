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
var UserGroup_exports = {};
__export(UserGroup_exports, {
  default: () => UserGroup_default
});
module.exports = __toCommonJS(UserGroup_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserGroupLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M274.664 304H173.336C77.609 304 0 381.602 0 477.332C0 496.477 15.523 512 34.664 512H413.336C432.477 512 448 496.477 448 477.332C448 381.602 370.398 304 274.664 304ZM413.336 480H34.664C33.195 480 32 478.803 32 477.332C32 399.4 95.402 336 173.336 336H274.664C352.598 336 416 399.4 416 477.332C416 478.803 414.805 480 413.336 480ZM224 256C294.695 256 352 198.691 352 128S294.695 0 224 0C153.312 0 96 57.309 96 128S153.312 256 224 256ZM224 32C276.936 32 320 75.064 320 128C320 180.934 276.936 224 224 224S128 180.934 128 128C128 75.064 171.064 32 224 32ZM375.984 241C392.922 250.812 412.297 256 432 256C493.75 256 544 205.75 544 144S493.75 32 432 32C419.172 32 406.609 34.156 394.656 38.391C386.328 41.344 381.969 50.484 384.922 58.812C387.875 67.156 397.047 71.469 405.344 68.547C413.859 65.531 422.828 64 432 64C476.109 64 512 99.891 512 144S476.109 224 432 224C417.922 224 404.094 220.297 392.016 213.312C384.359 208.859 374.578 211.484 370.156 219.141C365.719 226.781 368.328 236.578 375.984 241ZM490.672 320H448C439.156 320 432 327.156 432 336S439.156 352 448 352H490.672C555.359 352 608 404.641 608 469.328C608 475.219 603.219 480 597.328 480H496C487.156 480 480 487.156 480 496S487.156 512 496 512H597.328C620.859 512 640 492.859 640 469.328C640 386.984 573.016 320 490.672 320Z" })
  }
));
UserGroupLight.displayName = "UserGroupLight";
var UserGroup_default = UserGroupLight;
