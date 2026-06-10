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
var UserAstronaut_exports = {};
__export(UserAstronaut_exports, {
  default: () => UserAstronaut_default
});
module.exports = __toCommonJS(UserAstronaut_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserAstronautSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 448C167.25 448 160 455.25 160 464V512H192V464C192 455.25 184.75 448 176 448ZM272 448C263.25 448 256 455.25 256 464S263.25 480 272 480S288 472.75 288 464S280.75 448 272 448ZM164 172L172.205 196.617C173.42 200.262 178.58 200.262 179.795 196.617L188 172L212.615 163.797C216.262 162.578 216.262 157.422 212.615 156.203L188 148L179.795 123.383C178.58 119.734 173.42 119.734 172.205 123.383L164 148L139.385 156.203C135.738 157.422 135.738 162.578 139.385 163.797L164 172ZM336.082 315.406C304.035 338.562 265.141 352 224 352S143.971 338.566 111.922 315.406C46.553 340.219 0 403.258 0 477.332C0 496.477 15.523 512 34.664 512H128V448C128 430.25 142.25 416 160 416H288C305.75 416 320 430.25 320 448V512H413.336C432.477 512 448 496.477 448 477.332C448 403.258 401.455 340.219 336.082 315.406ZM64 224H77.5C102.25 280.5 158.375 320 224 320S345.75 280.5 370.5 224H384C392.75 224 400 216.75 400 208V112C400 103.25 392.75 96 384 96H370.5C345.75 39.5 289.625 0 224 0S102.25 39.5 77.5 96H64C55.25 96 48 103.25 48 112V208C48 216.75 55.25 224 64 224ZM104 136C104 113.875 125.5 96 152 96H296C322.5 96 344 113.875 344 136V160C344 213 301 256 248 256H200C147 256 104 213 104 160V136Z" })
  }
));
UserAstronautSolid.displayName = "UserAstronautSolid";
var UserAstronaut_default = UserAstronautSolid;
