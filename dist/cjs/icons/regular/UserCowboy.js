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
var UserCowboy_exports = {};
__export(UserCowboy_exports, {
  default: () => UserCowboy_default
});
module.exports = __toCommonJS(UserCowboy_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserCowboyRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M97.075 183.5C96.825 186.375 96.2 189.125 96.2 192C96.2 262.75 153.42 320 224.135 320C294.848 320 352.069 262.75 352.069 192C352.069 189.25 351.444 186.625 351.319 183.875C420.409 153.875 444.897 106 446.395 103C449.893 95.875 447.52 87.125 440.774 82.75C434.151 78.25 425.157 79.5 419.909 85.5C418.036 87.375 397.42 106.125 343.823 119.125C333.079 69 312.213 0 278.231 0C267.862 0 258.618 4.5 250.872 10.5C235.629 22.375 214.139 22.375 198.897 10.5C191.151 4.5 181.907 0 171.536 0C137.553 0 116.565 69.375 105.946 119.5C50.723 106.5 30.36 87.625 29.985 87.625C25.612 80 15.866 77.25 8.12 81.625C0.499 85.875 -2.25 95.625 1.999 103.375C3.499 106.25 28.86 153.5 97.075 183.5ZM224.135 208C250.747 208.125 277.358 205.25 303.344 199.375C299.471 240 265.739 272 224.135 272S148.674 240 144.926 199.25C170.913 205.25 197.524 208.125 224.135 208ZM314.665 352H133.336C59.7 352 0 411.695 0 485.332C0 500.059 11.942 512 26.665 512H421.336C436.059 512 448 500.059 448 485.332C448 411.695 388.307 352 314.665 352ZM50.7 464C60.198 427.236 93.645 400 133.336 400H314.665C354.356 400 387.803 427.236 397.301 464H50.7Z" })
  }
));
UserCowboyRegular.displayName = "UserCowboyRegular";
var UserCowboy_default = UserCowboyRegular;
