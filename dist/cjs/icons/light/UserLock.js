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
var UserLock_exports = {};
__export(UserLock_exports, {
  default: () => UserLock_default
});
module.exports = __toCommonJS(UserLock_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserLockLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 288V208C576 163.891 540.125 128 496 128S416 163.891 416 208V288C380.654 288 352 316.652 352 352V448C352 483.346 380.654 512 416 512H576C611.346 512 640 483.346 640 448V352C640 316.652 611.346 288 576 288ZM448 208C448 181.531 469.531 160 496 160S544 181.531 544 208V288H448V208ZM608 448C608 465.645 593.645 480 576 480H416C398.356 480 384 465.645 384 448V352C384 334.355 398.356 320 416 320H576C593.645 320 608 334.355 608 352V448ZM496 376C482.746 376 472 386.744 472 400C472 413.254 482.746 424 496 424S520 413.254 520 400C520 386.744 509.254 376 496 376ZM224 256C294.695 256 352 198.691 352 128S294.695 0 224 0C153.313 0 96 57.309 96 128S153.313 256 224 256ZM224 32C276.936 32 320 75.064 320 128C320 180.934 276.936 224 224 224S128 180.934 128 128C128 75.064 171.065 32 224 32ZM173.336 336H274.664C284.18 336 293.426 337.062 302.369 338.971C312.639 341.162 322.274 332.764 321.367 322.303C321.358 322.186 321.348 322.066 321.336 321.947C320.719 314.705 315.455 308.865 308.33 307.424C297.442 305.221 286.203 304 274.664 304H173.336C77.539 304 -0.115 381.715 0 477.543C0.024 496.574 15.633 512 34.664 512H304C312.836 512 320 504.836 320 496C320 487.162 312.836 480 304 480H34.664C33.213 480 32 478.793 32 477.342C31.994 399.404 95.399 336 173.336 336Z" })
  }
));
UserLockLight.displayName = "UserLockLight";
var UserLock_default = UserLockLight;
